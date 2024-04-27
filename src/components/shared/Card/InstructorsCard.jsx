import React from "react";
import { Card, Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PrimaryBtn from "../Button/PrimaryBtn";
import { useLocation } from "react-router-dom";

// TODO: See Classes BUTTON WORK NOT FINISHED:

const InstructorsCard = ({ instructors }) => {
  const location = useLocation();
  const isOnInstructorsPage = location?.pathname?.includes("instructors");
  const { instructor, courseTitle } = instructors;

  return (
    <>
      {isOnInstructorsPage ? (
        <div
          disabled={isOnInstructorsPage} // Disable button on the Instructors page
        >
          <Card
            maxW="sm"
            marginX="auto"
            className="max-[350px] mx-auto space-y-6 rounded-2xl  px-6 py-4 shadow-md bg-white md:w-[350px]"
            _hover={{ ".instructor-card-image": { transform: "scale(1.1)" } }}
            overflow="hidden"
          >
            {/* Card Image */}
            <img
              className="h-[190px] w-[350px]  object-fill instructor-card-image rounded-2xl"
              src={instructor?.image ? instructor?.image : "Img Not Found"}
              alt="instructor img"
              transition="transform 0.3s ease-in-out"
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
              {isOnInstructorsPage && (
                <Text>
                  <span className="font-medium">Email :</span>{" "}
                  {instructor?.email ? instructor?.email : "Data Not Found"}
                </Text>
              )}
            </Stack>
            {isOnInstructorsPage && (
              <PrimaryBtn
                label="See Classes"
                width="w-[120px]"
                border="border-0"
              />
            )}
          </Card>
        </div>
      ) : (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={isOnInstructorsPage} // Disable button on the Instructors page
        >
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
              {isOnInstructorsPage && (
                <Text>
                  <span className="font-medium">Email :</span>{" "}
                  {instructor?.email ? instructor?.email : "Data Not Found"}
                </Text>
              )}
            </Stack>
          </Card>
        </motion.button>
      )}
    </>
  );
};

export default InstructorsCard;
