/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";

import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const styles = {
  root: {
    margin: "5px 0",
    "& > svg": {
      fill: "grey",
      width: "15px",
      height: "15px",
      marginRight: "5px",
      marginBottom: "-4px"
    },
    "& > a": {
      fontSize: "0.9rem",
      color: "grey",
      textDecoration: "none"
    },
    "& > a:hover": {
      textDecoration: "underline"
    },
    // style separating "," to avoid conditional in loops inside render
    "& > a:after": {
      content: "','",
      display: "inline-block", // avoid underline on hover
      textDecoration: "none",
      paddingRight: "3px"
    },
    "& > a:last-child:after": {
      content: "''"
    }
  }
};

const KeywordsList = ({ keywords, classes, className, style }) => {
  if (keywords && keywords.length > 0) {
    return (
      <div className={classNames(classes.root, className)} style={style}>
        <LocalOfferIcon />
        {keywords.map((keyword, index) => (
          <Link
            to={`/search?q=keywords:"${keyword}"`}
            key={`${keyword}-${index}`}
          >
            {keyword}
          </Link>
        ))}
      </div>
    );
  }
  return null;
};

KeywordsList.propTypes = {
  classes: PropTypes.object.isRequired,
  keywords: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object
};

KeywordsList.defaultProps = {
  keywords: [],
  className: undefined,
  style: undefined
};

export default withStyles(styles)(KeywordsList);