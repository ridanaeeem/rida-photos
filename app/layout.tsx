import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Caveat } from "next/font/google";
import Link from "next/link";

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
					<h1 className="text-4xl">
						<Link href="/">Rida Naeem Photography</Link>
					</h1>
				</div>
				<div>
					<h2 className="text-3xl">
						<Link href="/collections">Collections</Link>
					</h2>
				</div>
				{children}
			</body>
		</html>
	);
}
