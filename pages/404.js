import Link from "next/link";
import Head from "next/head";
import Button from "react-bootstrap/Button"

export default function Error404() {
    return (
        <>
            <Head><title>Page Not Found | Oeconomia Economics Society</title></Head>

            <div className="p-5 m-5 d-flex flex-column align-items-center">
                <h1>404</h1>
                <div className="text-center">Oops! We can&apos;t find this page.</div>
                <div className="text-center">But, we&apos;re sure you&apos;ll find loads of interesting content on our home page!</div>

                <Link href="/"><Button variant="dark" size="lg" className="mt-3">Return Home</Button></Link>
            </div>
        </>
    );
}