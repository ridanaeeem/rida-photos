"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
	const pathname = usePathname();

	return (
		<nav>
			<div className="header flex flex-col p-2 md:p-5 bg-white">
				<h1 className={`text-4xl ${pathname === "/" ? "text-[#809BB3]" : "text-black"}`}>
					<Link href="/">Rida Naeem Photography</Link>
				</h1>
			</div>
			<ul className="text-xl md:text-3xl flex justify-center pb-5">
				<ul className={`px-5 ${pathname === "/collections" ? "text-[#809BB3]" : "text-black"}`}>
					<Link href="/collections">Collections</Link>
				</ul>
				<ul className={`px-5 ${pathname === "/contact" ? "text-[#809BB3]" : "text-black"}`}>
					<Link href="/contact">Contact</Link>
				</ul>
				<ul className={`px-5 ${pathname === "/about" ? "text-[#809BB3]" : "text-black"}`}>
					<Link href="/about">About</Link>
				</ul>
			</ul>
		</nav>
	);
}
