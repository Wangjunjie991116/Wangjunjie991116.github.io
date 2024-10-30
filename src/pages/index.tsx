import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { loadImage } from '@site/src/utils/index';

import avatar2 from '@site/static/img/avatar2.jpg';
import noise from '@site/static/img/noise.png';
import { useEffect } from 'react';
import styles from './index.module.css';
import { HomepageFeatures, WebGL } from '@site/src/components';

const initLogo = async () => {
	const vsSource = `
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
			`;
	const fsSource = `
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
			`;

	const [banana, xeno] = await Promise.all([loadImage(avatar2), loadImage(noise)]);
	const aka = new WebGL(document.querySelector('canvas'));
	const { gl } = aka;

	aka.init(vsSource, fsSource)
		.loadBuffer(
			new Float32Array([
				1.0, 1.0, 1, 1, -1.0, 1.0, 0, 1, -1.0, -1.0, 0, 0, -1.0, -1.0, 0, 0, 1.0, -1.0, 1, 0, 1.0, 1.0, 1, 1,
			])
		)
		.setAttrib('aPosition', 2, gl.FLOAT, false, 16, 0)
		.setAttrib('aUV', 2, gl.FLOAT, false, 16, 8)
		.loadTexture(banana)
		.setUniform('uTexture1', 'uniform1i', 0)
		.loadTexture(xeno)
		.setUniform('uTexture2', 'uniform1i', 1);

	let value = 0.0;
	let reverse = false;

	const draw = () => {
		const uniform2 = gl.getUniformLocation(aka.program, 'uVar');
		gl.uniform1f(uniform2, reverse ? (value -= 0.01) : (value += 0.01));
		if (value >= 1) {
			reverse = true;
		}

		if (value <= 0) {
			reverse = false;
		}

		aka.draw(aka.gl.TRIANGLES, 6);

		requestAnimationFrame(draw);
	};
	draw();
};

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();

	useEffect(() => {
		initLogo();
	}, []);

	return (
		<header className={styles.heroBanner}>
			<div className="container">
				<canvas width="300" height="300" style={{ borderRadius: '50%' }} />
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs/intro">
						🚀🚀🚀 Go 🚀🚀🚀
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
