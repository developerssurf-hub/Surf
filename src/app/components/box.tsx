interface boxProps {
    description: string;
    img: string;
}



export default function Box(props: boxProps) {
    const { description, img } = props;
    return (
        <div className="w-full">
            <div className="rounded-[22px] " style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                aspectRatio: "768/614",
            }}>
                <div className="w-1/2 h-full rounded-[22px] bg-[linear-gradient(240deg,_rgba(255,_255,_255,_0.20)_29.78%,_rgba(153,_153,_153,_0.20)_94.02%)] backdrop-filter backdrop-blur-[7px] p-3 flex items-end justify-end">

                    <p className="text-[20px] text-white">{description}</p>
                </div>
            </div>
        </div>
    );
}