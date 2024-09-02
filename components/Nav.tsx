import Link from "next/link";

export default function Nav() {
	return (
		<nav>
			<ul className="text-xl md:text-3xl flex justify-center pb-5">
				<ul className="px-5">
					<Link href="/collections">Collections</Link>
				</ul>
				<ul className="px-5">
					<Link href="/contact">Contact</Link>
				</ul>
				<ul className="px-5">
					<Link href="/about">About</Link>
				</ul>
			</ul>
		</nav>
	);
}
