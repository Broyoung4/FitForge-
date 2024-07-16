import React from 'react';


interface PricingProps {
  title: string;
  price: string;
  description: string[];
  bgcolor: string;
  color: string;
  btnbg: string;
  btntext: string;
}


const Descriptions = [
  {
    title: "Basic",
    price: "$19.99",
    description: ['5 classes per month', 'Basic Nutrition plan', 'Only physical access', 'Essential fitness classes'],
    bgcolor: 'white',
    color: 'black',
    btnbg: 'sea-green',
    btntext: 'white'
  },
  {
    title: "Standard",
    price: "$49.99",
    description: ['10 classes per month', 'Comprehensive Nutrition plan', 'online fitness access', 'Exclusive fitness training'],
    bgcolor: 'dark-green',
    color:'white',
    btnbg: 'white',
    btntext: 'sea-green'
  },
  {
    title: "Premium",
    price: "$99.99",
    description: ['15 classes per month', 'Extensive Nutrition plan', 'Exclusive fitness access', 'Unlimited fitness classes'],
    bgcolor: 'white',
      color: 'black',
      btnbg: 'sea-green',
      btntext: 'white'
  }
];

const PricingCard = ({ title, price, description, bgcolor, color, btnbg, btntext }: PricingProps ) => {
  return (
    <div className={`flex flex-col justify-center items-center gap-8 bg-${bgcolor} text-${color} py-6 px-4 rounded-xl shadow-md w-[250px] max-w-sm mx-auto`}>
      <h2 className='text-xl text-center '>{title}</h2>
      <h2 className='text-xl font-bold'>{price}<span className=' text-gray-500'>/Per month</span></h2>
      <ul className='list-none list-inside mt-4 flex flex-col items-start justify-start'>
        {description.map((item, index) => (
          <li className="before:content-['✓']" key={index}>{item}</li>
        ))}
      </ul>
      <button className={`py-2 px-8 bg-${btnbg} text-${btntext} w-[70%]  outline-none rounded-full border-2 hover:border-[#eb9534]`}>Choose plan</button>
      
    </div>
  );
}


const Pricing: React.FC = () => {
  return (
    <section className='max-container min-h-screen flex flex-col gap-10 padding'>
      <div className='flex md:flex-row flex-col items-center justify-between'>
         <h1 className="text-white text-3xl font-poppins font-bold leading-2 mb-8 capitalize max-w-[350px] ">Start your fitness journey process at<span className='text-sea-green flex mt-3 md:ml-0 ml-1.5 capitalize'> Fit-forge </span></h1>
        <p className="text-slate-gray text-base text-center font-poppins font-normal leading-2 mb-2">choose the subscription plan that best fits your fitness goals and preferences</p>
      </div>
      <div className='flex flex-row flex-wrap gap-10'> 
        {Descriptions.map((plan, index) => (
          <PricingCard 
            key={index}
            title={plan.title} 
            price={plan.price} 
            description={plan.description}
            bgcolor={plan.bgcolor}
            color={plan.color} 
            btnbg={plan.btnbg}
            btntext={plan.btntext}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
