import { Stack } from "@mui/material";
import Input from "../components/Input";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import api from "../axiosConfig";

function Home() {
  const [url, setUrl] = useState("");
  const [refresh, setRefresh] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await api.post(`/url/`, {
      url: url,
    });
    setUrl("");
    setRefresh(!refresh);
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
    <Stack>
      <Input handleSubmit={handleSubmit} url={url} setUrl={setUrl} />
      <Table urls={urls} refresh={refresh} setRefresh={setRefresh} />
    </Stack>
  );
}

export default Home;
