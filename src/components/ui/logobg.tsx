import { useId } from 'react';

interface logobgProps {
    bgimage: string;
    width?: number | string;
}

export default function Logobg(props: logobgProps) {
    const { bgimage, width } = props;
    const patternId = useId();

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 183 202" className="aspect-[183/202]" >
            <defs>
                <pattern
                    id={patternId}
                    patternUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <image
                        href={bgimage}
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                    />
                </pattern>
            </defs>
            <path
                fill={`url(#${patternId})`}
                d="M21.1188 198.763C21.1188 198.763 7.37881 109.483 10.9288 100.993L0.378808 29.5631C0.378808 29.5631 -3.70119 14.9431 14.9188 15.3831C33.5288 15.8231 51.2588 11.8331 77.8588 7.85314C77.8588 7.85314 108.439 -0.676856 165.619 0.0431442C165.619 0.0431442 172.709 24.8331 174.929 74.8531C174.929 74.8531 190.889 137.273 176.699 155.893L55.2588 172.733C55.2588 172.733 35.7588 188.463 28.6688 198.773C28.6688 198.773 23.3888 205.493 21.1388 198.773L21.1188 198.763Z"
            />
        </svg>
    );
}