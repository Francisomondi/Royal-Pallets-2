import Link from 'next/link'

export default function MyApp({ Component, pageProps }) {
return (
    <div>

    <Link href="/">
        <p>Home</p>
    </Link>

    <Link href="/about">
        <p>About</p>
    </Link>
    
    
    <Component {...pageProps} />
    <footer>
    <p>This website is under construction. Kindly bear with us we will be up and running in no minute!</p>
    </footer>
    </div>

) 
}