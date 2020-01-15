import { Link, LinkProps } from "rebass";

export const NavLink = (props: LinkProps) => (
  <Link
    {...props}
    sx={{
      display: "inline-block",
      color: "inherit",
      textDecoration: "none",
      fontWeight: "bold"
    }}
  />
);
