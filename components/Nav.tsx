import Link from "next/link";

export default function Nav() {
	return (
		<nav>
			<ul className="text-3xl flex justify-center">
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
