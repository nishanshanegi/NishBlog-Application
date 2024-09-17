import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "./Context/AppContext";

export default function App() {

  const {fetchBlogPosts}= useContext(AppContext);

  useEffect( () => {
    fetchBlogPosts();
  },[]);
  return(
    <div className="w-full h-full flex flex-col gap-y-1 justify-cente items-center">
      <Header/>

      <Blogs/>
    <Pagination/>
   </div>
  );
}
 