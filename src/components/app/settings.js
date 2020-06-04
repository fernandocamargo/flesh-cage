import numeral from "numeral";
import React from "react";
import Markdown from "react-markdown";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography
} from "@material-ui/core";
import { GetApp as Size, Visibility } from "@material-ui/icons";

import { Counter } from "components";

import { date, renderers } from "./helpers";

export const columns = [
  {
    name: "id",
    label: "ID",
    render: ({ id }) => (
      <Typography variant="body2" color="textSecondary" component="span">
        {id}
      </Typography>
    )
  },
  {
    name: "summary",
    label: "Summary",
    render: ({ created_at, owner, full_name, description, html_url }) => (
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
          subheader={<em>Created at: {date(created_at).format()}</em>}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="div">
            <Markdown source={description} renderers={renderers} />
          </Typography>
        </CardContent>
      </Card>
    )
  },
  {
    name: "language",
    label: "Language(s)",
    render: ({ language }) => (
      <Typography variant="body2" color="textSecondary" component="span">
        {language}
      </Typography>
    )
  },
  {
    name: "updated",
    label: "Last update",
    render: ({ updated_at }) => (
      <Typography variant="body2" color="textSecondary" component="span">
        {date(updated_at).format()}
      </Typography>
    )
  },
  {
    name: "stars",
    label: "Stars",
    render: ({ stargazers_count }) => (
      <Typography variant="body2" color="textSecondary" component="span">
        {numeral(stargazers_count).format("0a")}
      </Typography>
    )
  },
  {
    name: "forks",
    label: "Forks",
    render: ({ forks_count }) => (
      <Typography variant="body2" color="textSecondary" component="span">
        {numeral(forks_count).format("0a")}
      </Typography>
    )
  },
  {
    name: "issues",
    label: "Issues",
    render: ({ open_issues_count }) => (
      <Typography variant="body2" color="textSecondary" component="span">
        {numeral(open_issues_count).format("0a")}
      </Typography>
    )
  },
  {
    name: "metrics",
    label: "Other metrics",
    render: ({ watchers_count, size }) => (
      <div>
        <Counter value={watchers_count} format="0a" title="Watchers">
          <Visibility />
        </Counter>
        <Counter value={size} format="0b" title="Size">
          <Size />
        </Counter>
      </div>
    )
  }
];

export const getRowId = ({ id }) => id;
