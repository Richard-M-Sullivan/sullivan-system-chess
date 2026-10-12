interface HeroProps {
  src: string;
}

function Hero({ src }: HeroProps) {
  return (
    <>
    <div className="Hero">
      <img src={src}></img>
    </div>
    </>
  );
}

export default Hero;
