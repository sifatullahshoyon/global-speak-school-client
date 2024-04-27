import { Card, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const InstructorsCard = ({ instructors }) => {
  const { instructor, courseTitle, students } = instructors;
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Card
        maxW="sm"
        marginX="auto"
        className="max-[350px] mx-auto space-y-6 rounded-2xl  px-6 py-4 shadow-md bg-white md:w-[350px]"
      >
        {/* Card Image */}
        <img
          className="h-[190px] w-[350px]  object-fill	 rounded-2xl"
          src={instructor?.image ? instructor?.image : "Img Not Found"}
          alt="instructor img"
        />
        {/* Card Heading */}
        <div className="space-y-2">
          <Heading
            size="md"
            className="font-medium sm:text-lg md:text-xl text-left"
          >
            {instructor?.name ? instructor?.name : "Data Not Found"}
          </Heading>
        </div>
        <Stack className="text-left">
          <Text>
            <span className="font-medium">Instructor :</span>{" "}
            {courseTitle ? courseTitle : "Data Not Found"}
          </Text>
          {/* <Text><span className='font-medium'>Total Student :</span> {students ? students : "Data Not Found"}</Text> */}
        </Stack>
      </Card>
    </motion.button>
  );
};

export default InstructorsCard;
