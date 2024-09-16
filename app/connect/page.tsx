import React from "react";

export default function Contact() {
	return (
		<div>
			<title>Contact</title>
			<main>
				<div className="bg-gradient-to-b from-[#171719] to-[#171719] min-h-screen text-white">
					<h1 className="text-2xl md:text-4xl text-left font-bold p-6">About Me</h1>
					<p className="text-lg md:text-2xl text-left px-6">
						Hi! My name is Rida, and I recently graduated from Boston University where I studied
						Neuroscience and Computer Science. If you want to learn more about my work in those fields,
						check out{" "}
						<a href="https://rnaeem.com" target="_blank" className="text-[#809BD8]">
							my portfolio
						</a>
						! Otherwise feel free to explore my photography here. I have been taking photos ever since I was
						a little kid and had a{" "}
						<a
							href="https://www.amazon.com/VTech-Kidizoom-Camera-2010-Version/dp/B0027CS7D6"
							target="_blank"
							className="text-[#809BD8]">
							VTech Kidizoom Camera
						</a>
						. These days I tend to use a Sony RX100M6 and FujiFilm X100F, but this camera will forever be
						important to me. My photos mostly capture moments in my life that I want to preserve, and I hope
						that viewing them conveys the same emotions I felt when taking them. Take a look on the{" "}
						<a href="/" className="text-[#809BD8]">
							main page
						</a>{" "}
						to scroll through some of my favorite photos, and make sure to check out the{" "}
						<a href="/personal" className="text-[#809BD8]">
							Personal page
						</a>{" "}
						to see my personal photography and the{" "}
						<a href="/professional" className="text-[#809BD8]">
							Professional page
						</a>{" "}
						to see my growing professional portfolio. Enjoy!
					</p>
					<h1 className="text-2xl md:text-4xl text-left font-bold p-6">Get in Touch</h1>
					<p className="text-lg md:text-2xl text-left px-6 pb-6">
						Email:{" "}
						<a href="mailto:ridan@bu.edu" className="text-[#809BD8]">
							ridan@bu.edu
						</a>
						<br></br>
						Instagram{" "}
						<a href="https://www.instagram.com/ridasphotos/" className="text-[#809BD8]">
							@ridasphotos
						</a>
					</p>
				</div>
			</main>
		</div>
	);
}
