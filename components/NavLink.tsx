import { Link, LinkProps } from "rebass";

export const NavLink = (props: LinkProps) => (
  <Link
    {...props}
    sx={{
      display: "inline-block",
      color: "inherit",
      mr: [3, 4],
      textDecoration: "none"
    }}
  />
);
