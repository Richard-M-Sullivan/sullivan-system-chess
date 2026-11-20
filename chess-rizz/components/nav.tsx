import Link from 'next/link';

export default function Nav({links,}) {
    return (
        <header>
            <nav>
                <ul>
                    {links.map( link => ( <Link key={link.text} href={link.url}>{link.text}</Link> ))}
                </ul>
            </nav>
        </header>
    );
}
