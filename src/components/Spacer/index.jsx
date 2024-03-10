import * as React from "react";
import {Box} from "@mui/material";

const Spacer = ({ height, backgroundColor }) => {
  return (
    <section
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "transparent",
      }}
    >
      <Box component="div">
        <Box style={{ height: height ? height : ""}}></Box>
      </Box>
    </section>
  );
};

export default Spacer;