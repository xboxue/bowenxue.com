import { Box } from "rebass";
import { NavLink } from "./NavLink";

export const Nav = () => (
  <Box
    sx={{
      pt: 4,
      pb: 4,
      position: "fixed",
      width: "100%",
      top: 0,
      zIndex: 10,
      borderBottom: "1px solid grey"
    }}
  >
    <Box ml={[3, 4, 5]}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/portfolio">Portfolio</NavLink>
    </Box>
  </Box>
);
