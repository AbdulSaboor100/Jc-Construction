import React from "react";
import { Grid } from "@mui/material";
import styles from "./our-clients.module.scss";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

let clients_data = [
  {
    src: "fXFcHnDfDBs",
  },
  {
    src: "DxE9sR4g91s",
  },
  {
    src: "lE8xxEjKrCE",
  },
  {
    src: "WbOUpmGkdxg",
  },
  {
    src: "mnqZM3ayHPg",
  },
  {
    src: "YuW_I2pLFgQ",
  },
];

const OurClients = () => {
  return (
    <div className={styles.client_list_container}>
      <Grid container spacing={2}>
        {clients_data.map((item, i) => {
          return (
            <Grid key={i} item xs={12} sm={12} md={6}>
              <div className={styles.clinet_item}>
                <LiteYouTubeEmbed webp={true} id={item.src} />
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default OurClients;
