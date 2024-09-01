import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Caveat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Rida Naeem Photography",
	description: "Rida Naeem's photography portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={caveat.className}>
				<div className="header flex flex-col p-2 md:p-5 bg-[#9EB8CF]">
					<h1 className="text-4xl">Rida Naeem Photography</h1>
				</div>
				{children}
			</body>
		</html>
	);
}
