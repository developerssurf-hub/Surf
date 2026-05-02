import Box from "./box";

export default function Hero() {
  return (
    <section className='flex flex-col gap-3 pt-[100px] pb-[50px] justify-center items-center'>
      <div className='container bg-[url(/hero/bg.png)] bg-no-repeat bg-contain bg-center w-full h-full flex justify-center relative'>
        <img src="/hero/campera.png" className='max-h-[200px] lg:max-h-[550px] md:max-h-[400px] sm:max-h-[350px] ' alt="" />
        <img src="/hero/over.png" className='absolute top-[50%] right-[5%] translate-y-[-50%] w-[100px] lg:w-[450px] md:w-[300px] sm:w-[200px] ' alt="" />
        <img src="/hero/eatelp.png" className="absolute w-[100px] md:w-[140px] top-[50%] left-[15%] md:left-[25%] translate-y-[-50%] -rotate-25" alt="" srcset="" />
      </div>
      <h1 className="title">
        Cuidamos todos los detalles
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 container">
        <Box
          description="Tejidos de alta calidad"
          img="/hero/front2.png"
        />
        <Box
          description="Tejidos de alta calidad"
          img="/hero/front1.png"
        />
        <Box
          description="Tejidos de alta calidad"
          img="/hero/front3.png"
        />
      </div>
    </section>
  );
}
