// import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
     <div
       style={{ backgroundImage: "url(bg-3.jpg)" }}
       className="w-screen h-screen bg-cover bg-center flex items-center justify-center text-white"
    >
      <div>
      <section>
          <h2 className='text-3xl text-teal-600 font-bold text-center mt-12'>About Me</h2>
        <div className='flex mt-12 w-100%'>
      
      <div>
        <h3 className='text-2xl font-bold text-teal-600 mb-6 pl-16 mt-4'>My Education</h3>
        <h4 className='mx-4 text-sm font-semibold'> I am a engineering student pursing my B.TECH from St. Vincent Pallotti College Of Engg & Technology ,Nagpur</h4>
        <h4 className='mx-4 text-3xl font-bold text-teal-600 pl-12 mt-7'>Extra Curricullar</h4>
        <h4 className='mx-4 text-lg font-semibold mt-3'> * 6 months internship at Ceve consultancy as a research analyst </h4>
        <h4 className='mx-4 text-lg font-semibold mt-4'> * I am a part of college's cricket team for univerity leagues </h4>
        <h4 className='mx-4 text-lg font-semibold mt-2'> * I have attended few hackathons including <span className='text-teal-600 text-xl font-semibold'>ETH INDIA, Codeutsava 6.0 (NIT Raipur), ETHforAll, TPG Hacker House</span> </h4>
      
    </div>
    </div>
        </section>
      </div>
    </div>
  );
};

export default Page;