import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import CardBtn from "../Button/CardBtn";

const SimpleCard = ({ feature }) => {
  const { details, icon: Icon, title } = feature;

  return (
    // <div className='w-[308px] p-5 border hover:shadow-md'>
    //     <h1>Title : {title}</h1>
    // </div>
    // <></>
    <Card
      maxW="xl"
      className="border-1 hover:shadow-md bg-red-500 rounded-none"
    //   shadow='md'
      rounded='none'
      _hover='box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;'
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
          <Heading size="md" className="text-gray-700 font-bold font-roboto">
            {title && title ? title : "Data Not Found"}
          </Heading>
          <Text className="text-gray-500 font-semibold">
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
