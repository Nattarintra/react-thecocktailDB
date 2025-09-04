import type { ReactElement } from "react";
import { Link } from "react-router";

interface ITagsProps {
  tag: string;
}

export const Tags = ({ tag }: ITagsProps): ReactElement => {
  return <Link to="/">{tag}</Link>;
};
