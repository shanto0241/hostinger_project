import Image from "next/image";

const Card = () => {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <div className="rounded overflow-hidden shadow-lg">
                <Image  src="/9.jpg" width={300} height={200} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl text-center mb-2">Nature</div>
                </div>
            </div>
            <div className=" rounded overflow-hidden shadow-lg">
                <Image  src="/7.jpg" width={300} height={200} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl text-center mb-2">Street</div>
                </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg">
                <Image  src="/10.jpg" width={300} height={200} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl text-center mb-2">Wedding</div>
                </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg">
                <Image  src="/5.jpg" width={300} height={200} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl text-center mb-2">Life</div>
                </div>
            </div>
        </div>
    );
};

export default Card;