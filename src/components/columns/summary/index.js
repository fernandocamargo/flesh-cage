import React, { useMemo } from 'react';
import { Avatar, Card, CardContent, CardHeader } from '@material-ui/core';
import Markdown from 'react-markdown';

import locale from 'locale';

import { renderers } from './helpers';

export const Summary = ({
  created_at,
  owner,
  full_name,
  description,
  html_url,
}) => {
  const created = useMemo(
    () =>
      new Date(created_at).toLocaleDateString(locale, { dateStyle: 'full' }),
    [created_at]
  );

  return (
    <Card>
      <CardHeader
        avatar={
          <a
            href={owner.html_url}
            target="_blank"
            rel="noopener noreferrer"
            title={`See "${owner.login}" at Github`}
          >
            <Avatar alt={owner.login} src={owner.avatar_url} />
          </a>
        }
        title={
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            title={`See "${full_name}" at Github`}
          >
            {full_name}
          </a>
        }
        subheader={<em>Created at: {created}</em>}
      />
      <CardContent>
        <Markdown source={description} renderers={renderers} />
      </CardContent>
    </Card>
  );
};

Summary.propTypes = {};

Summary.defaultProps = {};

export default Summary;
