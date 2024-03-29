import React from 'react';
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';

const SimpleCard = ({feature , }) => {
    const {details , image : Icon , title} = feature;
    return (
        // <div className='w-[308px] p-5 border hover:shadow-md'>
        //     <h1>Title : {title}</h1>
        // </div>
        // <></>
        <Card maxW='xl' className='border-1 hover:shadow-md bg-red-500'>
  <CardBody>
    {
        Icon && (
            <Image
      src={Icon ? Icon : "Icon Not Found"}
      alt='icon'
      width='100px'
      height='100px'
      className='object-cover'
      borderRadius='lg'
    />
        )
    }
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title ? title : "Data Not Found text-gray-600 bold"}</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    );
};

export default SimpleCard;