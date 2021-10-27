// Global
import { arrayPost } from "../../constant/global";
// Components
import Post from "../common/post";

export default function Container() {
  return (
    <>
      {arrayPost.map((value) => {
        return <Post key={value} value={value + 1} />;
      })}
    </>
  );
}
