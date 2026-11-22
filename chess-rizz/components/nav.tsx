'use client';

import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';

export default function Nav({links,}) {
    const pathname = usePathname();

    return (
        <header className="bg-chess-bg">
            <nav className="flex items-center justify-between">
                <Image src="/chess-rizz-nav.svg" alt="chess rizz logo" width="150" height="150" />
                <ul>
                    {links.map( link => ( 
                        <Link
                            key={link.text}
                            href={link.url}
                            className={`transition duration-300 rounded-full p-3 ${ link.url === pathname ? "bg-chess-bg-light text-black" : "bg-chess-bg text-chess-text"} hover:bg-chess-bg-dark hover:text-black`}
                        >{link.text}</Link> ))}
                </ul>
            </nav>
        </header>
    );
}
