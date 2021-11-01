// Dependencies
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
// Global
import { URL } from "../../constant/global";
// Material UI
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

// Styles
import "./style.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

export default function Post({ value }) {
  const instance = useMemo(
    () => axios.create({ baseURL: `${URL}/${value}` }),
    [value]
  );
  const classes = useStyles();
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    instance.get().then((res) => {
      const { data } = res;
      setNote(data);
      setLoading(false);
    });
  }, [instance]);

  return loading ? (
    <>
      <Skeleton variant="rect" width={450} height={20} className="skeleton" />
      <Skeleton variant="rect" width={450} height={100} className="skeleton" />
    </>
  ) : (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {note.title}
        </Typography>
        <Typography variant="body2" component="p">
          {note.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" size="small">
          Learn More
        </Button>
        <Button variant="contained" color="secondary" size="small">
          Click ME!
        </Button>
      </CardActions>
    </Card>
  );
}
