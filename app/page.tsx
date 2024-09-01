"use client";
import Image from "next/image";
export default function Home() {
	return (
		<div>
			<title>Rida Naeem Photography</title>
			<main>
				<div className="header flex flex-col p-5">
					<h1 className="text-4xl">Rida Naeem Photography</h1>
					<h2 className="text-2xl">Memories</h2>
				</div>
				<div className="grid grid-cols-3 gap-4 p-5">
					<div className="col-start-2 col-span-2">
						<img src="/waterLily.JPG" alt="water lily"></img>
					</div>
				</div>
				<div className="grid grid-cols-4 grid-rows-3 gap-4 px-5">
					<div className="col-span-2 row-start-1 row-span-2">
						<img src="/fireworks.JPG" alt="water lily"></img>
					</div>
					<div className="col-span-2 row-start-2 row-span-2">
						<img src="/chicagoEyes.JPG" alt="water lily"></img>
					</div>
				</div>
				<img className="p-5" src="/haSunset.JPG" alt="water lily"></img>
			</main>
		</div>
	);
}

/* Rida Naeem */
