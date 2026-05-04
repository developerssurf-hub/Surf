import RetroButton from './RetroButton';

export default function Inspiracion() {
    return (
        <section className="bg-[url('/inspiracion.png')] bg-cover bg-center flex h-[80vh] w-screen my-3">

            <div className="w-[45%] h-full p-5 flex flex-col gap-3 justify-end items-end backdrop-filter backdrop-blur-[10px] backdrop-brightness-50 ">
                <h1 className="text-white font-bold text-5xl text-right">¿Buscando inspiración?</h1>
                <p className="text-white font-poppins text-xl text-right">Explora diseños, combinaciones y estilos para crear juntos la campera que los va a identificar.</p>
                <RetroButton text="Ver Mas" bgColor="red" className="p-4" url="/productos" />
            </div>
        </section>
    );
}