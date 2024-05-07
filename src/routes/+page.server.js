export const prerender = true;
export const load = async () => {
  //content
  const about = await fetch(
    `https://api.maximedelvaux.com/wp-json/wp/v2/pages?slug=about`,
  ).then((r) => r.json());

  const posts = await fetch(
    `https://api.maximedelvaux.com/wp-json/wp/v2/posts?per_page=100&_fields=acf,id,slug,title`,
    // `https://api.maximedelvaux.com/wp-json/wp/v2/posts?_embed&per_page=100`,
  ).then((r) => r.json());

  const r1 = posts[Math.floor(Math.random() * (8 - 4 + 1) + 4)];
  const r2 = posts[Math.floor(Math.random() * (13 - 9 + 1) + 9)];
  const r3 = posts[Math.floor(Math.random() * (18 - 14 + 1) + 14)];
  const r4 = posts[Math.floor(Math.random() * (23 - 19 + 1) + 19)];
  const r5 = posts[Math.floor(Math.random() * (28 - 24 + 1) + 24)];
  const r6 = posts[Math.floor(Math.random() * (33 - 29 + 1) + 29)];
  const r7 = posts[Math.floor(Math.random() * (38 - 34 + 1) + 34)];
  const r8 = posts[Math.floor(Math.random() * (43 - 39 + 1) + 39)];
  const randomPosts = [r1, r2, r3, r4, r5, r6, r7, r8];
  return {
    about: about,
    posts: posts,
    randomPosts: randomPosts,
  };
};
