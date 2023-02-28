import Link from 'Next/link'

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
    <p>Website done by Francis Omondi</p>
    </footer>
    </div>

) 
}