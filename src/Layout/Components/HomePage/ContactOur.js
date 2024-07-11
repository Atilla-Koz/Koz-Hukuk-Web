export default function ContactOur() {
  return (
    <section className="bg-foot-img bg-cover bg-top min-h-screen flex flex-col justify-center items-center gap-8 ">
      <div className=" lg:bg-cover lg:bg-top lg:min-h-screen flex flex-col justify-center items-start gap-8 lg:gap-48 lg:mr-[50%] ">
        <div className="">
          <h2 className="text-white">Contact Our Attorneys Today</h2>
        </div>
        <section className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-col gap-4">
            <p className="text-white font-bold lg:text-[20px]">Main Office</p>
            <p className="text-white font-bold lg:text-[20px]">
              123 Anywhere St.
            </p>
            <p className="text-white font-bold lg:text-[20px]">
              Any City ST 12345
            </p>
            <h4 className="text-white font-bold lg:pt-8">
              PWD parking available.
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white font-bold lg:text-[20px]">
              Tel. (123) 456-7890
            </p>
            <p className="text-white font-bold lg:text-[20px]">
              Email: hello@reallygreatsite.com
            </p>
            <p className="text-white font-bold lg:text-[20px]">
              Social: @reallygreatsite
            </p>
          </div>
        </section>
        <div className="flex justify-center">
          <button className="bg-[#ff6e0d] font-bold text-black  rounded-[1px]">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
}
