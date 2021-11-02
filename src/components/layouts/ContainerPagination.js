// Dependencies
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
// Global
import { URL } from "../../constant/global";
// Components
import CustomTable from "../common/CustomTable";

export default function ContainerPagination() {
  const instance = useMemo(() => axios.create({ baseURL: URL }), []);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    instance.get().then((res) => {
      const { data } = res;
      console.log(data);
      setNotes(data);
      setLoading(false);
    });
  }, [instance]);

  return loading ? <p>Cargando...</p> : <CustomTable notes={notes} />;
}
