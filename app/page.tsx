"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
	const transitionLength = 1;

	return (
		<div>
			<title>Rida Naeem Photography</title>
			<main>
				<div className="header flex flex-col p-5">
					<h1 className="text-4xl">Rida Naeem Photography</h1>
					<h2 className="text-2xl">Memories</h2>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						duration: transitionLength,
					}}>
					<div className="grid grid-cols-3 gap-4 p-5 lg:grid-cols-6">
						<div className="col-start-2 col-span-2 lg:col-start-4">
							<img src="/waterLily.JPG" alt="water lily"></img>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						duration: transitionLength,
					}}>
					<div className="grid grid-cols-4 grid-rows-3 gap-4 px-5">
						<div className="col-span-2 row-start-1 row-span-2">
							<img src="/fireworks.JPG" alt="water lily"></img>
						</div>
						<div className="col-span-2 row-start-2 row-span-2">
							<img src="/chicagoEyes.JPG" alt="water lily"></img>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						duration: transitionLength,
					}}>
					<img className="p-5" src="/haSunset.JPG" alt="water lily"></img>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						duration: transitionLength,
					}}>
					<div className="grid grid-cols-3 gap-4 p-5">
						<div className="col-start-2 col-span-2">
							<img src="/waterLily.JPG" alt="water lily"></img>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						duration: transitionLength,
					}}>
					<div className="grid grid-cols-4 grid-rows-3 gap-4 px-5">
						<div className="col-span-2 row-start-1 row-span-2">
							<img src="/fireworks.JPG" alt="water lily"></img>
						</div>
						<div className="col-span-2 row-start-2 row-span-2">
							<img src="/chicagoEyes.JPG" alt="water lily"></img>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						duration: transitionLength,
					}}>
					<img className="p-5" src="/haSunset.JPG" alt="water lily"></img>
				</motion.div>
			</main>
		</div>
	);
}

/* Rida Naeem */
