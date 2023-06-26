const prerender = true;
const load = async () => {
  const fetchPost = async () => {
    const res = await fetch(`https://api.maximedelvaux.com/wp-json/wp/v2/pages?slug=about`);
    const data = await res.json();
    return data[0];
  };
  return {
    post: fetchPost()
  };
};
export {
  load,
  prerender
};
