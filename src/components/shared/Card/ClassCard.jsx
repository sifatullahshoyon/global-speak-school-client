import React from 'react';
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';


const ClassCard = ({classItem}) => {
    const {title , classImage , students} = classItem;
    return (
<>
<Card maxW='sm' overflow="hidden" _hover={{ '.class-card-image': { transform: 'scale(1.1)' } }}>
  <CardBody>

  <Image
      src={classImage ? classImage : "Img Not Found"}
      height='333'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    className='class-card-image'
          transition="transform 0.3s ease-in-out"
    />

    
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title ? title : "Data Not Found"}</Heading>
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
</>
    );
};

export default ClassCard;