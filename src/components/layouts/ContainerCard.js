// Global
import { arrayPost } from "../../constant/global";
// Components
import Post from "../common/Post";
// Material UI
import { Grid } from "@material-ui/core";

export default function ContainerCard() {
  return (
    <Grid container spacing={2}>
      {arrayPost.map((value) => {
        return (
          <Grid item md={3} sm={6} key={value}>
            <Post key={value} value={value + 1} />
          </Grid>
        );
      })}
    </Grid>
  );
}
