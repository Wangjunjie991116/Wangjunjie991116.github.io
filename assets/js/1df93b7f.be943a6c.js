"use strict";(self.webpackChunkjj_blog=self.webpackChunkjj_blog||[]).push([["8706"],{3693:function(t,e,i){i.r(e),i.d(e,{default:()=>j});var r=i("2676"),s=i("5222"),a=i("5954"),l=i("1629"),n=i("2958");let o=t=>new Promise(e=>{let i=new Image;i.src=t,i.onload=function(){e(i)}}),h=i.p+"assets/images/avatar2-b8d970b6b2ae22199eafd6fe6760a299.jpg",c=i.p+"assets/images/noise-1934aa47770dd85847de43aeeab8063c.png";var g=i("5271");let u="heroBanner_qdFl",d="buttons_AeoN",m=class t{gl;program;vs;fs;buffer;textures=[];constructor(t){if(t instanceof HTMLCanvasElement)return this.gl=t.getContext("webgl"),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this;throw Error("please pass canvas element")}init(t,e){let i=this.vs=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(i,t),this.gl.compileShader(i);let r=this.fs=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(r,e),this.gl.compileShader(r);let s=this.program=this.gl.createProgram();return this.gl.attachShader(s,i),this.gl.attachShader(s,r),this.gl.linkProgram(s),this.gl.useProgram(s),this}loadBuffer(t){let e=this.buffer=this.gl.createBuffer();return this.gl.bindBuffer(this.gl.ARRAY_BUFFER,e),this.gl.bufferData(this.gl.ARRAY_BUFFER,t,this.gl.STATIC_DRAW),this}loadTexture(t){let e=this.gl.createTexture();return this.gl.activeTexture(this.gl["TEXTURE"+this.textures.length]),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.textures.push(e),this}setAttrib(t,e,i,r,s,a){let l=this.gl.getAttribLocation(this.program,t);return this.gl.vertexAttribPointer(l,e,i,r,s,a),this.gl.enableVertexAttribArray(l),this}setUniform(t,e,i){let r=this.gl.getUniformLocation(this.program,t);return this.gl[e](r,i),this}draw(t,e){this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.drawArrays(t,0,e)}then(t){return t.call(this),this}};var f=i("4461");let v="features_t9lD",x=[{title:"Support Me",description:(0,r.jsxs)(r.Fragment,{children:["Give me a star at here ",(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Wangjunjie991116/Wangjunjie991116.github.io",children:"GitHub"})]})},{title:"About Me",description:(0,r.jsx)(r.Fragment,{children:"Fe"})},{title:"Contact Me",description:(0,r.jsx)(r.Fragment,{children:"Wechat: wjj2638241171"})}],E=t=>{let{title:e,description:i}=t;return(0,r.jsxs)("div",{className:(0,f.Z)("col col--4"),children:[(0,r.jsx)("div",{className:"text--center"}),(0,r.jsxs)("div",{className:"text--center padding-horiz--md",children:[(0,r.jsx)(n.Z,{as:"h3",children:e}),(0,r.jsx)("p",{children:i})]})]})};function T(){return(0,r.jsx)("section",{className:v,children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:x.map((t,e)=>(0,r.jsx)(E,{...t},e))})})})}let p=async()=>{let t=`
				precision mediump float;
				attribute vec2 aPosition;
				attribute vec2 aUV;
				varying vec2 vUV;
				varying vec2 vPos;
				void main() {
					gl_Position = vec4(aPosition, 0.0, 1.0);
					vUV = aUV;
					vPos = aPosition;
				}
			`,e=`
				precision mediump float;
				uniform sampler2D uTexture1;
				uniform sampler2D uTexture2;
				uniform float uVar;
				varying vec2 vUV;
				varying vec2 vPos;
				float random (vec2 st) {
					return fract(sin(dot(st.xy,vec2(12.9898,78.233)))* 43758.5453123);
				}
				void main() {
					vec4 color1 = texture2D(uTexture1, vUV);
					vec4 color2 = texture2D(uTexture2, vUV);
					vec4 color3 = vec4(vec3(random(vUV)), 1.);
					if (color2.r - uVar < 0.0) {
						discard;
					}
					gl_FragColor = color1;
				}
			`,[i,r]=await Promise.all([o(h),o(c)]),s=new m(document.querySelector("canvas")),{gl:a}=s;s.init(t,e).loadBuffer(new Float32Array([1,1,1,1,-1,1,0,1,-1,-1,0,0,-1,-1,0,0,1,-1,1,0,1,1,1,1])).setAttrib("aPosition",2,a.FLOAT,!1,16,0).setAttrib("aUV",2,a.FLOAT,!1,16,8).loadTexture(i).setUniform("uTexture1","uniform1i",0).loadTexture(r).setUniform("uTexture2","uniform1i",1);let l=0,n=!1,g=()=>{let t=a.getUniformLocation(s.program,"uVar");a.uniform1f(t,n?l-=.01:l+=.01),l>=1&&(n=!0),l<=0&&(n=!1),s.draw(s.gl.TRIANGLES,6),requestAnimationFrame(g)};g()};function _(){let{siteConfig:t}=(0,a.Z)();return(0,g.useEffect)(()=>{p()},[]),(0,r.jsx)("header",{className:u,children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("canvas",{width:"300",height:"300",style:{borderRadius:"50%"}}),(0,r.jsx)(n.Z,{as:"h1",className:"hero__title",children:t.title}),(0,r.jsx)("p",{className:"hero__subtitle",children:t.tagline}),(0,r.jsx)("div",{className:d,children:(0,r.jsx)(s.Z,{className:"button button--secondary button--lg",to:"/docs/oss/jj-fast-utils",children:"\uD83D\uDE80\uD83D\uDE80\uD83D\uDE80 Go \uD83D\uDE80\uD83D\uDE80\uD83D\uDE80"})})]})})}function j(){let{siteConfig:t}=(0,a.Z)();return(0,r.jsxs)(l.Z,{title:`Hello from ${t.title}`,description:"Description will go into a meta tag in <head />",children:[(0,r.jsx)(_,{}),(0,r.jsx)("main",{children:(0,r.jsx)(T,{})})]})}}}]);