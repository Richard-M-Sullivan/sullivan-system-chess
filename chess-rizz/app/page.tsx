import Link from 'next/link';

import HomeBanner from '@/components/home-banner'

export default function Home() {
  return (
    <>
        <HomeBanner 
            title="Make every move count."
            description="From your first tournament pairing to your next opening break through, everything you need to level up your chess lives in one place."
            src="/chess-rizz-logo.svg"
        />
        
    </>
  );
}
