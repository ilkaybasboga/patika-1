import axios from "axios";

const getUsers = async (Num) => {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + Num
  );
  console.log(users);
};

const getPost = async (Num) => {
  const { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts?id=" + Num
  );
  console.log(post);
};


async function getData(Number) {
  try {
    const users = await getUsers(Number);
    const post = await getPost(Number);
    return users + post;
  } catch (error) {
    return error;
  }
}

export default getData;
