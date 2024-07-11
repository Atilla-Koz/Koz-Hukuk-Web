export default function ContactOur() {
  return (
    <section className="bg-hero-img bg-cover bg-top min-h-screen flex flex-col justify-center items-center gap-8 ">
      <div className="">
        <h2 className="text-white">Contact Our Attorneys Today</h2>
      </div>
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-white font-bold">Main Office</p>
          <p className="text-white font-bold">123 Anywhere St.</p>
          <p className="text-white font-bold">Any City ST 12345</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold">PWD parking available.</h4>
          <p className="text-white font-bold">Tel. (123) 456-7890</p>
          <p className="text-white font-bold">
            Email: hello@reallygreatsite.com
          </p>
          <p className="text-white font-bold">Social: @reallygreatsite</p>
        </div>
      </section>
      <div className="flex justify-center">
        <button className="bg-[#ff6e0d] font-bold text-black  rounded-[1px]">
          GET STARTED
        </button>
      </div>
    </section>
  );
}
