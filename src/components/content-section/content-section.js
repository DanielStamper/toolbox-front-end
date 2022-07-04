import React from "react";

/**
 * Content Section component renders content (mainly text/mdown based)
 * for course detail and lesson detail
 */
const ContentSection = ({ children }) => {
  return <ContentDiv>{children}</ContentDiv>;
};

export default ContentSection;
