

const Newsletter = () => (
  <div className="py-10 px-12 border-2 border-sea-green">
    <div className="text-center">
      <h1 className="mt-10 lg:text-6xl lg:leading-[90px] text-[40px] leading-[60px] font-semibold font-poppins">Subscribe To Our Newsletter</h1>
      <p className="text-xl font-montserrat text-sea-green">And never miss latest Updates!</p>
    </div>
    <div className="flex justify-center items-center mt-12 lg:flex-row flex-col">
      <input type="email" placeholder="Enter your email address" className="lg:w-[620px] md:mb-0 border-2 border-sea-green rounded-md text-xl mr-2 md:mr-10 py-[0.75rem] px-[1rem] mb-[2rem] w-full" />
      <button type="button" className="py-4 px-6 bg-sea-green text-white outline-none rounded-xl border-2 hover:border-[#eb9534] max-lg:mt-6">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
