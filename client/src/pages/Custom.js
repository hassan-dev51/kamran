import React from "react";
import CustomForm from "../components/CustomForm";

import { CssBaseline, Container, Paper, Box } from "@mui/material";
const Custom = () => {
  return (
    <>
      <div className="text-center py-8">
        <h2 className="capitalize text-red-500">
          Do you have custom design! <br /> share with us <br /> we will
          transform it into real product
        </h2>
      </div>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <CustomForm />
        </Paper>
      </Container>
    </>
  );
};

export default Custom;
