import { Stack, Typography } from "@mui/material";
import Input from "../components/Input";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import api from "../axiosConfig";

function Home() {
  const [url, setUrl] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.post(`/url/`, {
        url: url,
      });
      setUrl("");
      setRefresh(!refresh);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  const [urls, setUrls] = useState(null);

  useEffect(() => {
    api
      .get("/url")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setUrls(data);
      });
  }, [refresh]);

  return (
    <Stack spacing={1}>
      <Input handleSubmit={handleSubmit} url={url} setUrl={setUrl} />
      {error ? (
        <Typography color={"red"}>Please input a valid url</Typography>
      ) : (
        <br></br>
      )}
      <Table urls={urls} refresh={refresh} setRefresh={setRefresh} />
    </Stack>
  );
}

export default Home;
