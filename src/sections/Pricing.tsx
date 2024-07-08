import React from 'react';

const PricingCard = ({ title, price, description1, }) => {
  return (
    <div className="flex flex-col justify-center items-center border border-slate-gray w-32 h-40 px-2 py-6 bg-white rounded-xl">
      <h3 className="text-black text-xl font-poppins font-bold leading-2 mt-2 capitalize">{title}</h3>
      <p className="text-black text-base text-center font-poppins font-normal leading-2 mt-2">{price}</p>
      <p className="text-black text-base text-center font-poppins font-normal leading-2 mt-2">{description}</p>
      <ul className="text-black text-base text-center font-poppins font-normal leading-2 mt-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}


const Pricing: React.FC = () => {
  return (
    <section className='max-container min-h-screen flex flex-col gap-10'>
      <div className='flex md:flex-row flex-col items-center justify-between'>
         <h1 className="text-white text-3xl font-poppins font-bold leading-2 mb-8 capitalize max-w-[350px] ">Start your fitness journey process at<span className='text-sea-green flex mt-3 md:ml-0 ml-1.5 capitalize'> Fit-forge </span></h1>
        <p className="text-slate-gray text-base text-center font-poppins font-normal leading-2 mb-2">choose the subscription plan that best fits your fitness goals and preferences</p>
      </div>
      <h2 className='text-4xl font-extrabold text-sea-green'>Pricing</h2>
    </section>
  );
};

export default Pricing;
