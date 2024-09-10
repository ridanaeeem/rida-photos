"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Caveat } from "next/font/google";
import { Darker_Grotesque } from "next/font/google";

const darker_grotesque = Darker_Grotesque({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });

export default function Nav() {
	const pathname = usePathname();

	return (
		<nav
			className={`${darker_grotesque.className} ${
				pathname === "/" ? "bg-white text-black" : "bg-[#171719] text-white"
			}`}>
			<div className="header flex flex-col font-bold p-2 md:p-5">
				<h1 className={`text-4xl ${caveat.className} ${pathname === "/" ? "text-[#809BB3]" : null}`}>
					<Link href="/">Rida Naeem Photography</Link>
				</h1>
			</div>
			<ul className="text-xl md:text-3xl flex justify-center pb-5 font-normal">
				<ul className={`px-5 ${pathname === "/personal" ? "text-[#809BB3]" : "null"}`}>
					<Link href="/personal">Personal</Link>
				</ul>
				<ul className={`px-5 ${pathname === "/professional" ? "text-[#809BB3]" : "null"}`}>
					<Link href="/professional">Professional</Link>
				</ul>
				<ul className={`px-5 ${pathname === "/connect" ? "text-[#809BB3]" : "null"}`}>
					<Link href="/connect">Connect</Link>
				</ul>
			</ul>
		</nav>
	);
}
