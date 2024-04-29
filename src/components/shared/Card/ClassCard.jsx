import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  Flex,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ClassCard = ({ classItem }) => {
  const location = useLocation();
  const isOnClassesPage = location?.pathname?.includes("classes");
  const {
    title,
    classImage,
    students,
    description,
    features,
    instructor,
    availableSeats,
    price,
    isLoggedIn,
    isAdmin,
    schedule,
  } = classItem;
  const bgColor = availableSeats === 0 ? "red.200" : "white";
  const btnDisabled = availableSeats === 0 || !isLoggedIn || isAdmin;
  const initialText = description;
  const [showFullText, setShowFullText] = useState(false);
  const [displayText, setDisplayText] = useState(initialText);
  const handleClick = () => {
    setShowFullText(!showFullText);
    setDisplayText(showFullText ? initialText : initialText.slice(0, 100));
  };
  const handleSelect = () => {
    if (!isLoggedIn) {
      toast("Please log in before selecting the course.");
      // Redirect to login page or show login modal
    } else if (isAdmin) {
      alert("Admins/Instructors cannot select a class.");
    } else {
      // Handle class selection
    }
  };
  return (
    <>
      {isOnClassesPage ? (
        <Box
          maxW="md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg={bgColor}
          boxShadow="md"
          p="4"
          marginX="auto"
        >
          <Box position="relative">
            <Image
              src={classImage ? classImage : "Img Not Found"}
              alt="class Image"
              rounded="2xl"
              w="350px"
              h="150px"
              bg="gray.500"
            />
            <Image
              src={instructor?.image ? instructor?.image : "Img Not Found"}
              alt="Instructor Img"
              rounded="full"
              borderWidth="4px"
              borderColor="white"
              bg="gray.400"
              position="absolute"
              bottom="-12"
              left="50%"
              transform="translateX(-50%)"
              w="100px"
              h="100px"
              dark={{
                borderColor: "#18181B",
              }}
            />
          </Box>
          <Box paddingTop="14">
            <Box d="flex" alignItems="baseline">
              <Heading fontSize="lg" fontWeight="semibold">
                <span className="font-bold">Course Title:</span>{" "}
                {title ? title : "Data Not Found"}
              </Heading>
              <Text paddingTop="2" fontSize="md">
                <span className="font-bold">Price:</span> $
                {price ? price : "Data Not Found"}
              </Text>
            </Box>
            <Box mt="2" mb="2">
              <Text fontSize="lg" fontWeight="semibold" lineHeight="short">
                <span className="font-bold">Instructor Name:</span>{" "}
                {instructor?.name ? instructor?.name : "Data Not Found"}
              </Text>
            </Box>
            <Flex justifyContent="space-between" alignItems="center" mb="2">
              <Text fontSize="sm">
                <span className="font-bold">Available Seats:</span>{" "}
                {availableSeats ? availableSeats : "0"}
              </Text>
            </Flex>
            <Box mb="2">
              <Flex>
                <Text className="font-bold">Schedules: </Text>

                {schedule?.map((schedule, index) => (
                  <Text key={index} ml="2">
                    {" "}
                    {schedule ? schedule : "Data Not Found"}
                  </Text>
                ))}
              </Flex>
            </Box>
            <Button
              mt="4"
              colorScheme="blue"
              disabled={btnDisabled}
              onClick={handleSelect}
              _disabled={{ cursor: "not-allowed" }}
            >
              {isLoggedIn
                ? btnDisabled
                  ? "Unavailable"
                  : "Select"
                : "Log in to select"}
            </Button>
          </Box>
        </Box>
      ) : (
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
      )}
    </>
  );
};

export default ClassCard;
