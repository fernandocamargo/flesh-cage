import { func, string } from "prop-types";
import React, { useCallback } from "react";

import withStyle from "./style";

export const Search = ({ onSubmit: submit, className }) => {
  const onSubmit = useCallback(
    event => {
      const {
        target: {
          elements: {
            keywords: { value: keywords }
          }
        }
      } = event;

      event.preventDefault();
      submit({ keywords });
    },
    [submit]
  );

  return (
    <form className={className} onSubmit={onSubmit}>
      <fieldset>
        <legend>Search Github repos:</legend>
        <div>
          <label htmlFor="keywords">Keywords:</label>
          <input type="text" id="keywords" />
          <button type="submit">Search</button>
        </div>
      </fieldset>
    </form>
  );
};

Search.propTypes = {
  className: string.isRequired,
  onSubmit: func.isRequired
};

Search.defaultProps = {};

export default withStyle(Search);
