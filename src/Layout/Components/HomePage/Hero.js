import logo from '../../../assets/Hero/K.svg';

export default function Hero() {
  return (
    <section className="bg-hero-img bg-cover bg-center min-h-screen flex justify-center items-center ">
      <div className="flex flex-col items-start gap-16 bg-white bg-opacity-50 p-8 rounded-lg text-center w-[90%] h-[50rem]">
        <img src={logo} alt="Logo" className="w-48 h-48 mb-1" />
        <h2 className="text-start">Real estate law for the modern world</h2>
        <p className="text-black text-start text-[1rem]">
          Arivaci & Co. is a legal office in Brooknew specializing in real
          estate law. With decades of experience and a personalized approach,
          our attorneys will help you with all aspects of your real estate deal.
        </p>
        <button className="bg-[#ff6e0d] text-black  rounded-[1px]">
          CONTACT US
        </button>
      </div>
    </section>
  );
}
