import Image from 'next/image'
import { spaceGrotesk } from '@/fonts/fonts'

export default function TopBanner({title, description, src, hint}) {
    return (
        <section className="flex lg:grid lg:grid-cols-3">
            <div className="col-span-2 flex flex-col grow gap-6">
                <h1 className={`${spaceGrotesk.className} text-7xl font-semibold tracking-tighter`}>
                    {title.split(' ').slice(0,-1).join(' ')}
                    <span className="bg-linear-[178deg,#00000000_55%,#ffd32e_55%,#ffd32e_80%,#00000000_80%]">
                        {title.split(' ').at(-1)}
                    </span>
                </h1> 
               <p className="text-chess-text">{description}</p>
            </div>
            <div className="hidden lg:block lg:flex lg:items-center">
                {src && <Image src={src} alt="chess piece" width="100" height="100" className="size-18"/>}
                {hint && <p className="text-chess-text text-xs lg:max-w-2xs">{hint}</p>}
            </div>

        </section>
    )
}
