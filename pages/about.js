import Link from 'next/link';
import HeadBlock from "../components/head";
import Generic from "../styles/Generic.module.css"
import TextStyles from '../styles/Text.module.css';
import HomeStyles from '../styles/Home.module.css';
import ContainerStyles from '../styles/Container.module.css';
import PostStyles from '../styles/PostContent.module.css';
import { GoogleAnalytics } from '@next/third-parties/google'

import Header from '../components/header';
import Footer from '../components/footer';

export default function About() { 
    return (
        <div className={Generic.pageContainer}>
            <HeadBlock title="About" description="About Text Effects" url="https://texteffects.dev/about" image="/images/metadata/main-og3.jpg" />
            <GoogleAnalytics gaId="G-T24VEWMP9E" />

            <main className={HomeStyles.main}>
            <Header/>

            <section className={`${ContainerStyles.section} PageHeader`}>
                <div className={` ${ContainerStyles.stacked}`}>
                    <h1 className={TextStyles.heading}>About</h1>
                </div>
            </section>

            <section className={`${PostStyles.container} PostContent`}>
                <p>This project was created by <a href="https://twitter.com/@mandy_kerr" target="_blank">Mandy Michael</a> to showcase all her experiments with creating text effects with HTML, CSS and JavaScript (and some SVG).</p>
                <p>It's a creative journey exploring the world of text effects using CSS, HTML, and JavaScript! The aim is to showcase the tools and techniques that breathe life into text and demystify the process of replicating those cool PhotoShop-like effects while keeping the basic web functionality intact – think editability, selectability, searchability, and the ability to copy and paste.
                </p>
                <p>Extra special thanks to <Link href="https://petebarr.com/">Pete Barr</Link> for designing the original site for my text series.</p>
                <p>If you're interested in text on the web you can check out my other blog [Text Lab](https://textlab.deb=v) or [Variable Fonts for Developers](https://variablefonts.dev).</p>
                <p>If you'd like to sponsor any of my sites please reach out to me at one of my social networks like [LinkedIn](https://www.linkedin.com/in/mandykerr), [Twitter](https://twitter.com/Mandy_Kerr) or [Mastodon](https://front-end.social/@mandymichael).</p>
            </section>

            </main>
            <Footer />
        </div>
    );
}
