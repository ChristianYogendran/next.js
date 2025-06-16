import Link from 'next/link';

export default function NewsPage() {
    return (
        <>
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link href="/news/abc">First News Item</Link>
                </li>
                <li>
                    <Link href="/news/abc">Second News Item</Link>
                </li>
                <li>
                    <Link href="/news/abc">Third News Item</Link>
                </li>
            </ul>
        </>
    ); 
}