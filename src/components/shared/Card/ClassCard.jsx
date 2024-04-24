import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const ClassCard = ({ classItem }) => {
  const { title, classImage, students, description, features } = classItem;
  const initialText = description;
  const [showFullText, setShowFullText] = useState(false);
  const [displayText, setDisplayText] = useState(initialText);
  const handleClick = () => {
    setShowFullText(!showFullText);
    setDisplayText(showFullText ? initialText : initialText.slice(0, 100));
  };
  return (
    <div data-aos="fade-up-right">
      <Card
        maxW="sm"
        overflow="hidden"
        _hover={{ ".class-card-image": { transform: "scale(1.1)" } }}
        marginX="auto"
      >
        <CardBody>
          <Image
            src={classImage ? classImage : "Img Not Found"}
            height="333"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            className="class-card-image"
            transition="transform 0.3s ease-in-out"
          />

          <Stack mt="6" spacing="3">
            <Heading size="md">{title ? title : "Data Not Found"}</Heading>
            <Box>
              <Text className={`initialColorMode ? '' : '' `}>
                {displayText}.......
                {displayText && (
                  <span onClick={handleClick} mt={2}>
                    {showFullText ? (
                      <span className="text-blue-400"> See More</span>
                    ) : (
                      <span className="text-blue-400"> See Less</span>
                    )}
                  </span>
                )}
              </Text>
            </Box>
            <Text>
              <span className="font-medium">Total Students:</span>
              <span> {students ? students : "Data Not Found"}</span>
            </Text>
            <Box>
              <Text className="font-medium">Features :</Text>
              <UnorderedList>
                {features?.map((feature, index) => (
                  <ListItem key={index}>{feature}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          </Stack>
        </CardBody>
        {/* <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default ClassCard;
