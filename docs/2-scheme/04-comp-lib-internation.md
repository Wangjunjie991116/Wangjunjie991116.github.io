# 多层组件库国际化方案

## 一、背景

> **AntD**：蚂蚁维护的组件库，本身已支持国际化  
> **DemoD**： 公司内部维护的组件库，基于 `AntD` 进行二次封装，二次封装涉及语言的内容不支持国际化  
> **DemoD Pro**： 公司内部维护的页面模板库，基于 `DemoD` 进行二次封装，二次封装涉及语言的内容不支持国际化

海外业务需要支持国际化，业务项目(React 生态)自身已使用社区方案，但项目引用的 3 份组件库仅 `AntD` 支持国际化，另外 2 个不支持国际化  
诉求：另外 2 个组件库支持国际化，尽量不造成组件库体积增大，配置简单易用

## 二、方案调研

### 2.1 React-intl

#### [使用](https://formatjs.github.io/docs/getting-started/installation#minimal-application)

1. 安装 `pnpm add react react-intl`
2. 从 `React-intl` 包里引入 `IntlProvider` 进行全局注入

```jsx
import * as React from 'react';
import { IntlProvider } from 'react-intl';

const messagesInFrench = {
    myMessage: "Aujourd'hui, nous sommes le {ts, date, ::yyyyMMdd}",
};

export default function App() {
    return (
        <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
            <Children />
        </IntlProvider>
    );
}
```

3. [Hooks 方式](https://formatjs.github.io/docs/react-intl/api#useintl-hook)：使用 `intl.formatMessage()`，可以通过传入 `id`，获取语言资源中的对应文本

```jsx
import React from 'react';
import { useIntl, FormattedDate } from 'react-intl';

const FunctionComponent: React.FC<{ date: number | Date }> = ({ date }) => {
    const intl = useIntl();
    return (
        <span title={intl.formatDate(date)}>
            <FormattedDate value={date} />
        </span>
    );
};

export default FunctionComponent;
```

#### 优势

1. 国际化相关 Api 代码（Context、Intl hooks）不需要我们维护

#### 劣势

1. DemoD、DemoD Pro 包体积增大

---

### 2.2 React-i18next

#### 使用

1. 安装 `pnpm add react-i18next i18next --save`
2. 语言资源的 `json` 文件，在 `i18n.js` 中做统一配置

```jsx
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: { translation: { 'Welcome to React': 'Welcome to React and react-i18next' } },
    fr: { translation: { 'Welcome to React': 'Bienvenue à React et react-i18next' } },
};

i18n.use(LanguageDetector) // 检测用户语言插件
    .use(initReactI18next) // 初始化 i18n实例
    .init({
        resources,
        lng: 'en',
        debug: true, // 是否开启调试
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
```

3. 在项目入口文件引入 `i18n`，`import "./react-i18next/i18n"`
4. 函数/类组件中通过 `react-i18next` 提供的不同语法形式进行使用

```jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export function MyComponent() {
    const { t, i18n } = useTranslation(); // not passing any namespace will use the defaultNS (by default set to 'translation')
    // or const [t, i18n] = useTranslation();

    return <p>{t('my translated text')}</p>;
}
```

#### 优势

1. **无额外开发语言切换函数成本**：`react-i18next` 自带 `changeLanguage` 函数进行语言变更，无需控制 `locale` 变更，只需要传入目标语言标识即可
2. **提供功能插件**
    1. 检测当前系统的语言环境（[i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector)）
    2. 从服务器获取语言配置资源（[i18next-http-backend](https://github.com/i18next/i18next-http-backend)）

#### 劣势

1. **体积增大**：DemoD、DemoD Pro 包体积增大
2. **实例覆盖问题**：后加载的实例会覆盖先加载的实例，造成先加载的实例资源文件找不到  
   （例如：DemoD、DemoD Pro 在业务项目同时安装，若 Pro 先加载，则会导致 `i18n.options.resource` 对象下的 Pro 语言资源没了，而 DemoD 还在，造成语言资源缺失）

---

### 2.3 手撸实现

> 模仿 AntD/AntD Pro 的国际化方案（其源码本质是删减版的 react-intl），在 DemoD 和 DemoD Pro 中手撸一套

#### 2.3.1 Antd Pro 核心实现

1. 定义一层 `React.Context`，在 `AntdConfigContext` 和**根元素**之间插入，并从 `AntdConfigContext` 中解构出 `locale` 值进行注入语言资源

```jsx title='pro-components 中的核心实现'
/* Creating a context object with the default values. */
const ProConfigContext = React.createContext<ConfigContextPropsType>({
    intl: {
        ...zhCNIntl /* 初始化语言 */,
        locale: 'default',
    },
    valueTypeMap: {},
    theme: emptyTheme,
    hashed: true,
    dark: false,
    token: defaultToken as ProAliasToken,
});

const configProviderDom = useMemo(() => {
    return (
        <AntdConfigProvider {...restConfig} theme={themeConfig}>
            <ProConfigContext.Provider value={proConfigContextValue}>
                <>
                    {autoClearCache && <CacheClean />}
                    {children}
                </>
            </ProConfigContext.Provider>
        </AntdConfigProvider>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [restConfig, themeConfig, proConfigContextValue, autoClearCache, children]);
```

2. 定义 `uselntl`，其根据 `locale` 获取对应国际化字符串资源

```javascript
/**
 * It returns the intl object from the context if it exists, otherwise it returns the intl object for
 * 获取国际化的方法
 * @param locale
 * @param localeMap
 * the current locale
 * @returns The return value of the function is the intl object.
 */
export function useIntl(): IntlType {
    const { locale } = useContext(AntdConfigProvider.ConfigContext);
    const { intl } = useContext(ProConfigContext);

    if (intl && intl.locale !== 'default') {
        return intl || zhCNIntl;
    }

    if (locale?.locale) {
        return intlMap[findIntlKeyByAntdLocaleKey(locale.locale) as 'zh-CN'] || zhCNIntl;
    }

    return zhCNIntl;
}
```

3. 使用处调用 `intl.getMessage(id,defaultMsg)`

```js
const init = useIntl();
const placeholderValue = placeholder || intl.getMessage('tabelForm.inputPlaceholder', '请输入');
```

#### 2.3.2 DemoD 、DemoD Pro 核心实现

```jsx title="src/Locale/index.ts"
import { createContext, useContext } from 'react';
import { staticLocale } from '../ConfigProvider';

export interface Locale {
    locale: string;
    Alert: {
        expand: string;
        collapse: string;
    };
}
export type LocaleContextProps = Locale;
export const LocaleContext = createContext<LocaleContextProps>({} as LocaleContextProps);

export const useLocale = <C extends keyof Locale = keyof Locale>(
    componentName: C
): readonly [NonNullable<Locale[C]>, string] => {
    const locale = useContext<LocaleContextProps>(LocaleContext) || staticLocale;
    const _locale = Object.keys(locale).length === 0 ? staticLocale : locale;
    return [_locale[componentName], _locale.locale];
};
```

```jsx title='src/ConfigProvider/index.tsx'
import React from 'react';
import type { Locale } from '../Locale';
import { LocaleContext } from '../Locale';
import zh_CN from '../Locale/zh_CH';

export interface ConfigProviderProps {
    children: React.ReactNode;
    locale?: Locale;
}

export let staticLocale: Locale = zh_CN;

export const ConfigProvider = (props: ConfigProviderProps) => {
    const { children, locale } = props;

    if (locale) {
        staticLocale = locale;
        return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
    }
    return <>{children}</>;
};
```

```js title='src/Locale/zh_CN.ts'
import type { Locale } from '.';

export const LocaleValue: Locale = {
    locale: 'zh-CN',
    Alert: {
        expand: '展开',
        collapse: '收起',
    },
};
```

#### 优点

1. 包体积小，不用额外引入第三方库
2. 自定义程度高，可随具体业务需要来增加功能
3. 支持 `TypeScript`

## 三、方案综述

调研发现，React 国际化方案基本一致：将页面的文字提到统一的文件目录进行管理，在代码使用的地方“挖坑”，使用 `id` 或变量“占坑”，最终根据实际的语言环境取文字资源进行“填坑”

| 方案 | 核心 | 资源文件格式 | 语法方式 | 自带 TS 支持 | 自带语言切换函数 | 自动检测系统语言 | 周下载量 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| React-intl | React.Context | JS | 函数/组件 | × | × | × | 166W |
| React-i18next | React.Context | JSON | 函数/组件 | × | √ | √ | 344W |
| 手撸实现 | React.Context | JS | 函数 | √ | × | × | -/- |

## 四、方案结论

使用方案：**2.3 手撸实现**  
主要考虑：① 业务方不希望引入新包及新包内无用功能的冗余代码导致体积增大；② 期望使用时可以通过 `a.b` 语法来获取语言资源，故需自带 TS 支持

## 五、使用方式

1. 业务项目为 AntD + DemoD，则使用 AntD 的 ConfigProvider 包裹 DemoD 的 ConfigProvider

```jsx
import { ConfigProvider as AntdConfigProvider } from 'antd';
import antdzhCN from 'antd/locale/zh_CN';
import { ConfigProvider as CustomdConfigProvider } from 'customd';
import customdzhCN from 'customd/es/locale/zh_CN';

const useageDemo = children => {
    return (
        <AntdConfigProvider locale={antdzhCN}>
            <CustomdConfigProvider locale={customdzhCN}>{children}</CustomdConfigProvider>
        </AntdConfigProvider>
    );
};
```

2. 业务项目为 AntD + DemoD + DemoD Pro 或 AntD + DemoD Pro，则使用 AntD 的 ConfigProvider 包裹 DemoD Pro 的 ConfigProvider

```jsx
import { ConfigProvider as AntdConfigProvider } from 'antd';
import antdzhCN from 'antd/locale/zh_CN';
import { ConfigProvider as CustomdProConfigProvider } from 'customd-pr';
import customdProzhCN from 'customd-pro/es/locale/zh_CN';

const useageDemo = children => {
    return (
        <AntdConfigProvider locale={antdzhCN}>
            <CustomdProConfigProvider locale={customdProzhCN}>{children}</CustomdProConfigProvider>
        </AntdConfigProvider>
    );
};
```

## 六、可优化点

1. **不支持变量赋值**：例如表格页脚常有：“总计 xxx 条数据”的展示场景。当前实现需要分别定义 `key1：总计`，`key2：条数据`，然后在使用的地方在 2 个 key 之间插入 xxx 的数值后，通过模板字符串拼接，此处可以优化
2. **不支持自动检测系统语言**：当前业务方使用时需要在代码中设置默认语言。但实际可以参考 [i18n-next 的自动检测插件](https://github.com/i18next/i18next-browser-languageDetector)的实现进行优化，这样就可以根据用户实际环境在进入系统时自动设置语言

## 七、参考资料

-   [react-intl 官方文档](https://formatjs.github.io/docs/getting-started/installation)
-   [使用 react-intl 实现 React 组件国际化](https://www.jianshu.com/p/574f6cea4f26)
-   [在 React 项目中使用 React-intl 实现多语言支持](https://segmentfault.com/a/1190000005824920)
-   [react-i18next 官方文档](https://react.i18next.com)
-   [React 中使用 react-i18next 国际化](https://www.cnblogs.com/operate/p/16199940.html)
-   [前端 i18n 最佳实践：在 React 中使用 i18next](https://juejin.cn/post/7139855730105942030)
-   [React 项目国际化介绍（react-i18next、react-intl)](https://www.jianshu.com/p/2f8d6e0b4adb)
-   [Antd Pro 国际化实现的源码](https://github.com/ant-design/pro-components/blob/master/packages/provider/src/index.tsx#L457C4-L457C12)
