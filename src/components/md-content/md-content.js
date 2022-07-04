import React from "react";

/**
 * Markdown component is a simple style wrapper for markdown content used across our app
 */
const MarkDown = ({ content }) => {
  return <StyledMarkdown children={content} />;
};

export default MarkDown;
