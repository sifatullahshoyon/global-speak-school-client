import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import CardBtn from "../Button/CardBtn";

const SimpleCard = ({ feature }) => {
  const { details, icon: Icon, title } = feature;
  const textColor = useColorModeValue("text-gray-600", "dark.text");

  return (
    <Card
      maxW="xl"
      className="border-1 hover:shadow-md"
      rounded="none"
      _hover={{ boxShadow: "xl" }}
      transition="box-shadow 0.3s ease"
    >
      <CardBody>
        {Icon && (
          <Image
            src={Icon ? Icon : "Icon Not Found"}
            alt="icon"
            width="100px"
            height="100px"
            className="object-cover"
            borderRadius="lg"
          />
        )}
        <Stack mt="6" spacing="3">
          <Heading
            color={textColor}
            size="md"
            className="text-gray-700 font-bold font-roboto"
          >
            {title && title ? title : "Data Not Found"}
          </Heading>
          <Text color={textColor} className="text-gray-500 font-semibold">
            {details && details ? details : "Data Not Found"}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            {/* $450 */}
          </Text>
        </Stack>
      </CardBody>

      <CardFooter>
        {/* <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup> */}

        {Icon && <CardBtn label="Read More" />}
      </CardFooter>
    </Card>
  );
};

export default SimpleCard;
