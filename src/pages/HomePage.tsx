import { useLoaderData } from "react-router-dom";

import * as Api from "@services/api";

function HomePage() {
  const user = useLoaderData();
  console.warn(user);

  return <div>Home</div>;
}

async function loader() {
  return Api.getCurrentUser();
}

HomePage.loader = loader;
export default HomePage;
