import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function CoverImage({ title, imageID, slug }) {
	const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${imageID}`;

	const image = (
		<Image
			width={2000}
			height={1000}
			alt={`Cover Image for ${title}`}
			src={imageUrl}
			className={cn("shadow-small", {
				"hover:shadow-medium transition-shadow duration-200": slug,
			})}
		/>
	);
	return (
		<div className="sm:mx-0">
			<Link href={`/posts/${slug}`}>
				{slug ? <a aria-label={title}>{image}</a> : image}
			</Link>
		</div>
	);
}
