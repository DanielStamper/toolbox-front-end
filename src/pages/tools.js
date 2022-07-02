import React from "react";
import { useQuery, gql } from "@apollo/client";
import ToolCard from "../containers/tool-card";
import { Layout, QueryResult } from "../components";

/** TRACKS gql query to retreive all tracks */
export const TOOLS = gql`
  query getTools {
    toolssForHome {
      id
      title
      thumbnail
      length
      owner {
        name
        photo
      }
    }
  }
`;

/**
 * Tools Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tools = () => {
  const { loading, error, data } = useQuery(TOOLS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((tool, index) => (
          <ToolCard key={tool.id} track={tool} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tools;
