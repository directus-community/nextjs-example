import Image from "next/image";

export default function Avatar({ name, picture }) {
	const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${picture}`;

	return (
		<div className="flex items-center">
			<div className="w-12 h-12 relative mr-4">
				<Image
					src={imageUrl}
					layout="fill"
					className="rounded-full"
					alt={name}
				/>
			</div>
			<div className="text-xl font-bold">{name}</div>
		</div>
	);
}
