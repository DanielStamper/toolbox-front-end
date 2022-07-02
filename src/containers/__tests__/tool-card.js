import React from "react";
import { renderApollo, cleanup, waitForElement } from "../../utils/test-utils";
import ToolCard from "../tool-card";

const mockToolCardData = {
  id: "c_0",
  title: "Claw Hammer",
  thumbnail: "../../assets/tool-images/hammer1.jpg",
  length: 237777,
  Owner: {
    name: "Daniel Stamper",
    photo:
      "https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzA0OH0",
  },
};

describe("Tool Card", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders tool Card", async () => {
    const mocks = [];
    const { getByText } = await renderApollo(
      <ToolCard tool={mockToolCardData} />,
      {
        mocks,
        resolvers: {},
        addTypename: false,
      }
    );
    await waitForElement(() => getByText(/claw hammer/i));
  });
});
