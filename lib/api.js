import { getClient } from "./directus";

export async function getPreviewPostBySlug(slug) {
	const directus = getClient(true);

	const { data: posts } = await directus.items("posts").readMany({
		fields: ["slug"],
		filter: {
			slug: {
				_eq: slug,
			},
		},
		limit: 1,
	});

	return posts?.[0];
}

export async function getAllPostsWithSlug(preview) {
	const directus = getClient(preview);

	const { data: posts } = await directus.items("posts").readMany({
		fields: ["slug"],
	});

	return posts;
}

export async function getAllPostsForHome(preview) {
	const directus = getClient(preview);

	const { data: posts } = await directus.items("posts").readMany({
		fields: [
			"title",
			"slug",
			"excerpt",
			"date",
			"cover_image",
			"author.name",
			"author.picture",
		],
	});

	return posts;
}

export async function getPostAndMorePosts(slug, preview) {
	const directus = getClient(preview);

	const [
		{
			data: [post],
		},
		{ data: morePosts },
	] = await Promise.all([
		directus.items("posts").readMany({
			fields: [
				"title",
				"slug",
				"content",
				"date",
				"cover_image",
				"author.name",
				"author.picture",
			],
			filter: {
				slug: {
					_eq: slug,
				},
			},
		}),
		directus.items("posts").readMany({
			fields: [
				"title",
				"slug",
				"excerpt",
				"date",
				"cover_image",
				"author.name",
				"author.picture",
			],
		}),
	]);

	return { post, morePosts };
}
