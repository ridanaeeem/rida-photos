"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

export default function Nav() {
	const pathname = usePathname();

	return (
		<nav
			className={`${caveat.className} ${
				pathname === "/collections" ? "bg-[#171719] text-white" : "bg-white text-black"
			}`}>
			<div className="header flex flex-col p-2 md:p-5">
				<h1 className={`text-4xl ${pathname === "/" ? "text-[#809BB3]" : null}`}>
					<Link href="/">Rida Naeem Photography</Link>
				</h1>
			</div>
			<ul className="text-xl md:text-3xl flex justify-center pb-5">
				<ul className={`px-5 ${pathname === "/collections" ? "text-[#809BB3]" : "null"}`}>
					<Link href="/collections">Collections</Link>
				</ul>
				<ul className={`px-5 ${pathname === "/contact" ? "text-[#809BB3]" : "null"}`}>
					<Link href="/contact">Contact</Link>
				</ul>
				<ul className={`px-5 ${pathname === "/about" ? "text-[#809BB3]" : "null"}`}>
					<Link href="/about">About</Link>
				</ul>
			</ul>
		</nav>
	);
}
