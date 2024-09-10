"use client";
import Link from "next/link";
import { Darker_Grotesque } from "next/font/google";
import { usePathname } from "next/navigation";

const darker_grotesque = Darker_Grotesque({ subsets: ["latin"] });

export default function Footer() {
	const pathname = usePathname();
	return (
		<div className={`${darker_grotesque.className} ${"bg-[#171719] text-white"}`}>
			<ul className="text-lg md:text-2xl flex justify-center pb-5 font-normal">
				<ul className="px-5 hover:text-[#809BD8]">
					<Link href="https://www.instagram.com/ridasphotos/">Instagram</Link>
				</ul>
				<ul className="px-5 hover:text-[#809BD8]">
					<Link href="mailto:ridan@bu.edu">Email</Link>
				</ul>
				<ul className="px-5 hover:text-[#809BD8]">
					<Link href={pathname}>Back to Top</Link>
				</ul>
			</ul>
		</div>
	);
}
