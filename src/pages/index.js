import React, { Fragment } from "react";
import { Router } from "@reach/router";
import Tools from "./tools";

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tools path="/" />
    </Router>
  );
}
