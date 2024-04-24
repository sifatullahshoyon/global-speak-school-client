import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../../../components/shared/Container";
import { useColorModeValue } from "@chakra-ui/react";
import Loader from "../../../components/shared/Loader";
import InstructorsCard from "../../../components/shared/Card/InstructorsCard";

const PopularInstructorsSection = () => {
  const [loading, setLoading] = useState(false);
  const [instructors, setInstructors] = useState([]);
  const textColor = useColorModeValue("text-gray-600", "gray.text");
  const textColorTwo = useColorModeValue("text-gray-500", "gray.text");

  useEffect(() => {
    const fetchPopularInstructor = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/instructor`
        );
        setInstructors(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching popular instructor:", error);
      }
    };
    fetchPopularInstructor();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <section className="py-20">
      <Container>
        <h2
          className={`text-xl md:text-3xl lg:text-4xl font-bold text-center pb-8 tracking-wide ${textColor}`}
        >
          Popular Instructor
        </h2>
        <p
          className={`lg:px-20 md:px-10 leading-normal text-center text-lg tracking-wide font-semibold pb-10 ${textColorTwo}`}
        >
          Our Instructors are renowned for their expertise and dedication to
          teaching. They bring a wealth of knowledge and experience <br /> to
          our language school, helping students achieve their language learning
          goals with confidence and enthusiasm.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-6">
          {instructors?.map((instructor, index) => (
            <InstructorsCard key={index} instructors={instructor} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularInstructorsSection;
