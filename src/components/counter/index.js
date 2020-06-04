import numeral from "numeral";
import { node, number, string } from "prop-types";
import React, { useMemo } from "react";
import { Badge, Tooltip } from "@material-ui/core";

import withStyle from "./style";

export const Counter = ({
  className: root,
  title,
  value,
  format,
  children
}) => {
  const classes = useMemo(() => ({ root }), [root]);
  const badgeContent = useMemo(() => numeral(value).format(format), [
    value,
    format
  ]);

  return (
    <Tooltip title={title} arrow>
      <Badge
        classes={classes}
        badgeContent={badgeContent}
        max={Infinity}
        color="primary"
      >
        {children}
      </Badge>
    </Tooltip>
  );
};

Counter.propTypes = {
  className: string.isRequired,
  title: node.isRequired,
  value: number.isRequired,
  format: string.isRequired,
  children: node.isRequired
};

Counter.defaultProps = {};

export default withStyle(Counter);
