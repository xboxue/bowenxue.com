import { Box, Flex, FlexProps, Text } from "rebass";
import { Blob } from "../components/Blob";
import { Contour } from "../components/Contour";
import { NavLink } from "../components/NavLink";

const Container = (props: FlexProps) => (
  <Flex
    {...props}
    sx={{
      position: "absolute",
      right: 0,
      height: "100%",
      alignItems: "flex-end"
    }}
  />
);

const Home = () => (
  <>
    <Box maxWidth="660px" mx="auto" px={[3, 4]}>
      <Box sx={{ position: "absolute", top: "40%" }}>
        <Text fontSize={[6, 7]}>BOWEN XUE</Text>
        <Box>
          <NavLink fontSize={[2, 3]} href="mailto:bowen.xue@carleton.ca">
            Email
          </NavLink>
          <NavLink fontSize={[2, 3]} href="https://github.com/xboxue">
            Github
          </NavLink>
          <NavLink
            fontSize={[2, 3]}
            href="https://www.linkedin.com/in/bowenxue"
          >
            LinkedIn
          </NavLink>
        </Box>
      </Box>
    </Box>
    <Container>
      <Box height={["60%", "70%"]}>
        <Blob />
      </Box>
    </Container>
    <Container>
      <Box height={["50%", "60%"]}>
        <Contour />
      </Box>
    </Container>
  </>
);

export default Home;
