import React from 'react';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

import { rhythm } from '../utils/typography';

const TagsContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  font-family: sans-serif;
  width: 100%;
`;

const Tag = styled.li`
  margin: ${rhythm(1 / 4)} ${rhythm(1 / 4)};
  padding: ${rhythm(1 / 6)} ${rhythm(1 / 2)};
  background-color: #eee;
  color: black;
  transition: all 150ms ease-in-out;
  font-size: ${rhythm(3 / 4)};
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    background-color: #ddd;
  }
`;

const Link = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
`;

export default function TagList({ list: tags = [] }) {
  if (!tags || tags.length === 0) {
    return null;
  }
  return (
    <TagsContainer>
      {tags.map(tag =>
        <Tag key={tag}>
          <Link to={`/tags/${tag}`}>
            {tag}
          </Link>
        </Tag>
      )}
    </TagsContainer>
  );
}
