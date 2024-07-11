import balance from '../../../assets/Advantege/balance.svg';

export default function Advantage() {
  return (
    <section className="bg-white bg-cover bg-center min-h-screen flex flex-col gap-8 justify-center items-center">
      <div>
        <h3>The Arivaci & Co. advantage</h3>
        <hr className="w-[20rem] border-[#ff6e0d] border-2" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <img className="w-[5rem] h-[5rem]" src={balance} alt="balance" />
        <div className="flex flex-col items-start gap-4 pr-8 pl-8">
          <h4 className="text-[#ff6e0d] font-bold">YEARS OF EXPERİENCE</h4>
          <p className="font-bold">
            What's special about your services or offerings? Give your audience
            a reason to choose you over your competitors. Cite it above, then
            flesh it out here.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img className="w-[5rem] h-[5rem]" src={balance} alt="balance" />
        <div className="flex flex-col items-start gap-4 pr-8 pl-8">
          <h4 className="text-[#ff6e0d] font-bold">
            RECOGNİZED FOR OUR EXPERTİSE
          </h4>
          <p className="font-bold">
            What's special about your services or offerings? Give your audience
            a reason to choose you over your competitors. Cite it above, then
            flesh it out here.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img className="w-[5rem] h-[5rem]" src={balance} alt="balance" />
        <div className="flex flex-col items-start gap-4 pr-8 pl-8">
          <h4 className="text-[#ff6e0d]  font-bold">FROM START TO FİNİSH</h4>
          <p className="font-bold">
            What's special about your services or offerings? Give your audience
            a reason to choose you over your competitors. Cite it above, then
            flesh it out here.
          </p>
        </div>
      </div>
    </section>
  );
}
