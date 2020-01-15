import { Box, Text } from "rebass";
import { Syllabus } from "../components/Syllabus";

const Workshop = () => (
  <Box sx={{ maxWidth: "800px", mx: "auto" }}>
    <Text fontSize={[4, 5]} mt={[3, 4]} mb={[2, 3]}>
      Workshop Outline
    </Text>
    <Syllabus />
  </Box>
);

export default Workshop;
