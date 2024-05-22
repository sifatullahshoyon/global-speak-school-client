import React, { useContext, useState } from "react";
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
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../providers/AuthProviders";
import SelectedClasses from "../../../pages/Dashboard/Students/SelectedClasses";

const ClassCard = ({ classItem }) => {
  const location = useLocation();
  const isOnClassesPage = location?.pathname?.includes("classes");
  const {user} = useContext(AuthContext);
  const {
    _id,
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
  const bgColor = availableSeats === 0 ? "red.300" : "white";
  const btnDisabled = availableSeats === 0 || user || isAdmin;
  const initialText = description;
  const [showFullText, setShowFullText] = useState(false);
  const [displayText, setDisplayText] = useState(initialText);
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    setShowFullText(!showFullText);
    setDisplayText(showFullText ? initialText : initialText.slice(0, 100));
  };
  const handleSelect = (item) => {
    console.log(item)
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
          // p="4"
          marginX="auto"
          className="relative p-4"
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
          <Box paddingTop="14" >
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
            <Box mb="10">
                <Text className="font-bold underline">Schedules: </Text>
                <UnorderedList>
                {schedule?.map((schedule, index) => (
                  <ListItem key={index} ml="2">
                    {schedule ? schedule : "Data Not Found"}
                  </ListItem>
                ))}
                </UnorderedList>
            </Box>
            <Box className="absolute bottom-0 mb-2">
            <Link to={`/classes/${_id}`}>
              <SelectedClasses className='hidden'/>
            <Button
              mt="4"
              colorScheme="blue"
              disabled={btnDisabled}
              onClick={() => handleSelect(classItem)}
              _disabled={disabled}
              className="disabled"
            >
              {isLoggedIn
                ? btnDisabled
                  ? "Unavailable"
                  : "Select"
                : "Select"} 
                
            </Button>
            </Link>
            <Link to='/dashboard/payment'><Button
              mt="4"
              ml='4'
              colorScheme="orange"
            >
             Enrolled
                
            </Button></Link>
            </Box>
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
