import Link from 'next/link';

export default function Home() {
  return (
    <main>
        <h1>Chess Rizz</h1>
        <p>Chess tools designed for maximum rizz</p>
        <ul>
            <Link href="/tournaments">Tournaments</Link>
            <Link href="/statistics">Statistics</Link>
            <Link href="/study">Study</Link>
            <Link href="/login">Login</Link>
        </ul>
    </main>
  );
}
