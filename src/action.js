export const addBlog = (title,desc) => {
  return  {
    type : "ADD_BLOG",
    id : (Math.random() * 100),
    title : title,
    desc : desc
  }
}