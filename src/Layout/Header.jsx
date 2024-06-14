import Logo from '../assets/Header/KHLogo.svg';
import search from '../assets/Header/search.svg';
import bars from '../assets/Header/bars.svg';
import norway from '../assets/Header/norway.mp4';

export default function Header() {
  return (
    <header className="">
      <section className="flex flex-col justify-between p-8">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-[1000px] object-cover"
            src={norway}
            autoPlay
            loop
            muted
          />
        </div>
        <div className="flex justify-between items-center z-10 relative w-full">
          <img className="w-[80px]" src={Logo} alt="Logo" />
          <div className="flex flex-row gap-8">
            <img className="w-[30px] text-white" src={search} alt="Search" />
            <img className="w-[30px] text-white" src={bars} alt="Menu" />
          </div>
        </div>
      </section>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-start">
        <h2 className="">Bilgi</h2>
        <h2>Deneyim</h2>
        <h2>Takım Çalışması</h2>
        <button className="pt-8">Keşfet</button>
      </div>
    </header>
  );
}
