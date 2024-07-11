import balance from '../../../assets/Advantege/balance.svg';

export default function Advantage() {
  return (
    <section className="bg-[#FDFAF5] bg-cover bg-center min-h-screen flex flex-col gap-8 justify-center items-center lg:flex-row lg:gap-24 ">
      <div className="lg:ml-8 lg:pr-[20%]">
        <h3 className="lg:text-[50px] text-wrap">The Arivaci &</h3>
        <h3 className="lg:text-[50px] text-wrap">Co. advantage</h3>
        <hr className=" border-[rgb(255,110,13)] border-2 lg:w-[21rem]" />
      </div>
      <div className="lg:flex lg:flex-col lg:gap-16">
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <img className="w-[5rem] h-[5rem]" src={balance} alt="balance" />
          <div className="flex flex-col items-start gap-4 pr-8 pl-8">
            <h4 className="text-[#ff6e0d] font-bold lg:text-[40px]">
              YEARS OF EXPERİENCE
            </h4>
            <p className="font-bold lg:text-[20px]">
              What's special about your services or offerings? Give your
              audience a reason to choose you over your competitors. Cite it
              above, then flesh it out here.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <img className="w-[5rem] h-[5rem]" src={balance} alt="balance" />
          <div className="flex flex-col items-start gap-4 pr-8 pl-8">
            <h4 className="text-[#ff6e0d] font-bold lg:text-[40px]">
              RECOGNİZED FOR OUR EXPERTİSE
            </h4>
            <p className="font-bold lg:text-[20px]">
              What's special about your services or offerings? Give your
              audience a reason to choose you over your competitors. Cite it
              above, then flesh it out here.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <img className="w-[5rem] h-[5rem]" src={balance} alt="balance" />
          <div className="flex flex-col items-start gap-4 pr-8 pl-8">
            <h4 className="text-[#ff6e0d]  lg:text-[40px] font-bold">
              FROM START TO FİNİSH
            </h4>
            <p className="font-bold lg:text-[20px]">
              What's special about your services or offerings? Give your
              audience a reason to choose you over your competitors. Cite it
              above, then flesh it out here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
