import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import Nav from "@/components/Nav";

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
				<Nav />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
