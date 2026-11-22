import Image from 'next/image'
import { spaceGrotesk } from '@/fonts/fonts'

export default function HomeBanner({title, description, src}) {
    return (
        <section className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-3" >
            <div className="flex flex-col justify-center gap-6 md:col-span-2">
                <h1 className={`${spaceGrotesk.className} text-7xl font-semibold tracking-tighter`}>
                    {title.split(' ').slice(0,-1).join(' ')}
                    <span className="bg-linear-[178deg,#00000000_55%,#ffd32e_55%,#ffd32e_80%,#00000000_80%]">
                        {title.split(' ').at(-1)}
                    </span>
                </h1> 
               <p className="text-chess-text">{description}</p>
            </div>
            <div className="hidden md:flex md:flex-col md:items-center ">
                {src && <Image src={src} alt="chess piece" width="100" height="100" className="md:w-auto md:min-w-80"/>}
            </div>

        </section>
    )
}
