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
    <Box
      maxWidth="660px"
      sx={{
        position: "absolute",
        zIndex: 10,
        top: ["15%", "15%", "20%"],
        left: ["30%", "30%", "40%"],
        transform: ["translate(-30%)", "translate(-30%)", "translate(-40%)"]
      }}
    >
      <Text fontSize={[4, 5]} fontWeight="bold">
        Hi! I'm Bowen.
      </Text>
      <Text fontSize={[3, 4]} mb={[2, 3]}>
        I like building things. Here are some of the things that I'm working on:
      </Text>
      <Text fontSize={[2, 3]} mb={[2, 3]}>
        <NavLink href="http://pixontrips.com">Pixontrips.com.</NavLink> A
        website for sharing photography and travel stories.
      </Text>
      <Text fontSize={[2, 3]} mb={[2, 3]}>
        <NavLink href="/workshop">Workshops</NavLink> for my university's web
        development course. I'm running weekly workshops on how to build a
        complete website with a modern stack featuring React, GraphQL, and
        Typescript.
      </Text>
      <Text fontSize={[2, 3]} mb={[3, 4]}>
        <NavLink>Cycles.</NavLink> A social app for tracking good habits.
      </Text>
      <Box>
        <NavLink
          fontSize={[2, 3]}
          href="mailto:bowen.xue@carleton.ca"
          mr={[3, 4]}
        >
          Email
        </NavLink>
        <NavLink fontSize={[2, 3]} href="https://github.com/xboxue" mr={[3, 4]}>
          Github
        </NavLink>
        <NavLink fontSize={[2, 3]} href="https://www.linkedin.com/in/bowenxue">
          LinkedIn
        </NavLink>
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
