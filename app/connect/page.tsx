import React from "react";

export default function Contact() {
	return (
		<div>
			<title>Contact</title>
			<main>
				<div className="bg-gradient-to-b from-white to-[#9EB8CF]">
					<div className="min-h-screen">
						<h1 className="text-4xl text-left font-bold p-6">About Me</h1>
						<p className="text-lg md:text-2xl text-left px-6">
							Hi! My name is Rida, and I recently graduated from Boston University where I studied
							Neuroscience and Computer Science. If you want to learn more about my work in those fields,
							check out{" "}
							<a href="https://rnaeem.com" target="_blank" className="text-blue-600">
								my portfolio
							</a>
							! Otherwise feel free to explore my photography here. I have been taking photos ever since I
							was a little kid and had a{" "}
							<a
								href="https://www.amazon.com/VTech-Kidizoom-Camera-2010-Version/dp/B0027CS7D6"
								target="_blank"
								className="text-blue-600">
								VTech Kidizoom Camera
							</a>
							. These days I tend to use a Sony RX100M6 and FujiFilm X100F, but this camera will forever
							be important to me. My photos mostly capture moments in my life that I want to preserve, and
							I hope that viewing them conveys the same emotions I felt when taking them. Take a look on
							the{" "}
							<a href="/" className="text-blue-600">
								main page
							</a>{" "}
							to scroll through some of my favorite photos, and make sure to check out the{" "}
							<a href="/collections" className="text-blue-600">
								Collections page
							</a>
							to see more specific themes. Enjoy!
						</p>
						<h1 className="text-4xl text-left font-bold p-6">Contact Me</h1>
						<p className="text-lg md:text-2xl text-left px-6">
							Email:{" "}
							<a href="mailto:ridan@bu.edu" className="text-blue-600">
								ridan@bu.edu
							</a>
							<br></br>
							Instagram{" "}
							<a href="https://www.instagram.com/ridasphotos/" className="text-blue-600">
								@ridasphotos
							</a>
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}
