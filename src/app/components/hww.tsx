import RetroButton from "./RetroButton";

export default function HWW() {
    return (
        <section className="w-screen bg-[url('/hww.png')] min-h-[80vh] my-3 grid grid-cols-1 md:grid-cols-2 ">
            <div className="w-full h-full flex items-center justify-center">
                <img src="/ficha.png" alt="" />
            </div>
            <div className="w-full h-full p-5 flex flex-col gap-3 justify-center items-center ">
                <h1 className="text-surf-blue font-bold text-5xl text-center">Cómo trabajamos</h1>
                <h4 className="text-surf-orange text-2xl text-center">Un proceso claro, simple y seguro</h4>
                <p className=" text-center mb-5">
                    Nos reunimos con los estudiantes y los padres para definir el diseño ideal, elegir el modelo y asegurarnos de que cada detalle quede exactamente como lo quieren. <br />
                    <br />
                    Trabajamos con diseñadores y un proceso de producción que garantiza prendas de calidad, con entrega segura en todo el país
                </p>
                <div className="w-full flex gap-5 justify-center">

                    <RetroButton text="Descargar plantillas" bgColor="blue" className="p-4" url="/plantillas" />
                    <RetroButton text="Ver Mas" bgColor="red" className="p-4" url="/productos" />
                </div>
            </div>
        </section>
    );
}