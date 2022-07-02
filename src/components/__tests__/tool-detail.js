import React from "react";
import { render, cleanup } from "../../utils/test-utils";
import ToolDetail from "../tool-detail";

const mockTool = {
  tool: {
    id: "c_0",
    title: "#2 flat head screwdriver",
    description: "Small screwdriver for prying\n\n",
    thumbnail: "../../assets/tool-images/screwdriver1.jpg",
    length: 2377,
    numberOfBorrows: 51,
    isBorrowed: false,
    author: {
      name: "Dave Sanford",
      photo:
        "https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzA0OH0",
    },
  },
};

describe("Module Detail View", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders without error", () => {
    render(<ToolDetail {...mockTool} />);
  });
});
