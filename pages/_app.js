import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import Head from "next/Head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Oeconomia Economics Society</title>
                <meta name="description" content="Harker Oeconomia seeks to communicate the importance of economics in the modern world, giving students opportunities to explore the field, meet professionals, submit written work, and advance their interest." />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            </Head>

            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
};
