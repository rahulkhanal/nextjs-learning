import React from "react";

const getPostData = async () => {
  const res = await fetch("https://api__________");
  return res.json;
};
const getUserData = async () => {
  const res = await fetch("https://api__________");
  return res.json;
};
const page = async () => {
  //   const post = await getPostData();
  const [post, user] = await Promise.all([getPostData(), getUserData()]);
  console.log(post);
  console.log(user);
  return <div>{post}</div>;
};

export default page;
