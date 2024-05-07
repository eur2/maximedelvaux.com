export const prerender = true;

export const load = async ({ params }) => {
  const fetchPost = async () => {
    const res = await fetch(
      `https://api.maximedelvaux.com/wp-json/wp/v2/posts/?slug=${params.slug}`,
    );
    //&_fields=acf,content,id,slug,title
    const data = await res.json();
    return data[0];
  };

  return {
    post: await fetchPost(params.slug),
  };
};
