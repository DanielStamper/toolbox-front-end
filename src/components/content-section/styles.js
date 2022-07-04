import { colors, widths } from "../../styles";
import styled from "@emotion/styled";

/** ContentSection styled component */
const ContentDiv = styled.div({
  marginTop: 10,
  display: "flex",
  flexDirection: "column",
  maxWidth: widths.textPageWidth,
  width: "100%",
  alignSelf: "center",
  backgroundColor: colors.background,
});
