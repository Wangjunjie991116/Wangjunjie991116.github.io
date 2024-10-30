import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList = [
  {
    title: 'Support Me',
    description: (
      <>
        Give me a star at here <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wangjunjie991116/Wangjunjie991116.github.io">GitHub</a>
      </>
    ), 
  },
  {
    title: 'About Me',
    description: (
      <>
        Fe
      </>
    ),
  },
  {
    title: 'Contact Me',
    description: (
      <>
        Wechat: wjj2638241171
      </>
    ),
  },
];


const Feature=(props: FeatureItem) =>{
  const {title,  description}=props
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
        {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
