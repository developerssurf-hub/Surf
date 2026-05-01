import RetroButton from './RetroButton';

export default function Inspiracion() {
    return (
        <section className="bg-[url('/inspiracion.png')] bg-cover bg-center flex h-[80vh] w-screen my-3">

            <div className="w-[45%] h-full p-5 flex flex-col gap-3 justify-end items-end bg-[linear-gradient(240deg,_rgba(255,_255,_255,_0.20)_29.78%,_rgba(153,_153,_153,_0.20)_94.02%)] backdrop-filter backdrop-blur-[7px] ">
                <h1 className="text-white font-bold text-5xl text-right">¿Buscando inspiración?</h1>
                <p className="text-white font-poppins text-xl text-right">No te preocupes, te mostramos algunas de las experiencias que han vivido nuestros egresados en sus viajes de egresados</p>
                <RetroButton text="Ver Mas" bgColor="red" className="p-4" url="/productos" />
            </div>
        </section>
    );
}