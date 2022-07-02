import React from "react";
import styled from "@emotion/styled";
import {
  colors,
  Button,
  IconRun,
  IconView,
  IconTime,
  IconBook,
} from "../styles";
import { humanReadableTimeFromSeconds } from "../utils/helpers";
import { Link } from "@reach/router";
import ContentSection from "./content-section";
import MarkDown from "./md-content";

/**
 * Tool Detail component renders the main content of a given track:
 * owner, length, number of views, among other things.
 * It provides access to the first module of the track.
 */
const ToolDetail = ({ tool }) => {
  const {
    title,
    description,
    thumbnail,
    owner,
    length,
    numberOfBorrows,
    isBorrowed,
  } = tool;

  return (
    <ContentSection>
      <CoverImage src={thumbnail} alt="" />
      <ToolDetails>
        <DetailRow>
          <h1>{title}</h1>
        </DetailRow>
        <DetailRow>
          <DetailItem>
            <h4>Tool details</h4>
            <IconAndLabel>
              <IconView width="16px" />
              <div id="borrowCount">{numberOfBorrows} borrows(s)</div>
            </IconAndLabel>
            <IconAndLabel>
              <IconBook width="14px" height="14px" />
              <div>Available: {isBorrowed}</div>
            </IconAndLabel>
            <IconAndLabel>
              <IconTime width="14px" />
              <div>{humanReadableTimeFromSeconds(length)}</div>
            </IconAndLabel>
          </DetailItem>
          <DetailItem>
            <h4>Owner</h4>
            <OwnerImage src={owner.photo} />
            <OwnerName>{owner.name}</OwnerName>
          </DetailItem>
        </DetailRow>
      </ToolDetails>
      <MarkDown content={description} />
    </ContentSection>
  );
};

export default ToolDetail;

/** Track detail styled components */
const CoverImage = styled.img({
  objectFit: "cover",
  maxHeight: 400,
  borderRadius: 4,
  marginBottom: 30,
});

const ToolDetails = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 20,
  borderRadius: 4,
  marginBottom: 30,
  border: `solid 1px ${colors.silver.dark}`,
  backgroundColor: colors.silver.lighter,
  h1: {
    width: "100%",
    textAlign: "center",
    marginBottom: 5,
  },
  h4: {
    fontSize: "1.2em",
    marginBottom: 5,
    color: colors.text,
  },
});

const DetailRow = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingBottom: 20,
  marginBottom: 20,
  borderBottom: `solid 1px ${colors.silver.dark}`,
});

const DetailItem = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  color: colors.textSecondary,
  alignSelf: "center",
});

const OwnerImage = styled.img({
  height: 30,
  width: 30,
  marginBottom: 8,
  borderRadius: "50%",
  objectFit: "cover",
});

const OwnerName = styled.div({
  lineHeight: "1em",
  fontSize: "1em",
});

const IconAndLabel = styled.div({
  display: "flex",
  flex: "row",
  alignItems: "center",
  maxHeight: 20,
  width: "100%",
  div: {
    marginLeft: 8,
  },
  svg: {
    maxHeight: 16,
  },
  "#viewCount": {
    color: colors.pink.base,
  },
});
