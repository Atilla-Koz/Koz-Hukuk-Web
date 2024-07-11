export default function OurExpertise() {
  return (
    <section className="bg-[#E2DFD8] bg-cover bg-center min-h-screen flex flex-col gap-8 justify-center items-center">
      <img
        className="w-[95%]"
        src="https://miro.medium.com/v2/resize:fit:900/1*XLCLoC9sTxUH1pN7Rv9aog.jpeg"
        alt="lala"
      />
      <div className="flex flex-col items-stretch gap-4 pr-[4rem] pl-[4rem]">
        <h2>Our Expertise</h2>
        <hr className="w-[20rem] border-[#ff6e0d] border-2" />
        <p className="font-bold pb-[4rem]">
          Share your services or specializations here, then list them down as
          bullet points for mobile-friendly easy reading.
        </p>
        <u className="font-bold no-underline">
          <li>Add as many bullets as you need</li>
          <li>Add as many bullets as you need</li>
          <li>Add as many bullets as you need</li>
          <li>Add as many bullets as you need</li>
          <li>Add as many bullets as you need</li>
        </u>
      </div>
    </section>
  );
}
