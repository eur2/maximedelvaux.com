export const prerender = true;

export const load = async () => {
	const fetchPosts = async () => {
		const res = await fetch(
			`https://api.maximedelvaux.com/wp-json/wp/v2/posts?_embed&per_page=100`
		);
		const data = await res.json();
		return data;
	};

	return {
		posts: await fetchPosts()
	};
};

// export async function load({ fetch }) {
// 	const fetchPosts = await fetch(
// 		`https://api.maximedelvaux.com/wp-json/wp/v2/posts?_embed&per_page=100`
// 	).then((r) => r.json());

// 	return {
// 		posts: fetchPosts
// 	};
// }
