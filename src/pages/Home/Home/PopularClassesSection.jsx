import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../../../components/shared/Container";
import ClassCard from "../../../components/shared/Card/ClassCard";
import { useColorModeValue } from "@chakra-ui/react";
import Loader from "../../../components/shared/Loader";
import { useLocation } from "react-router-dom";

const PopularClassesSection = () => {
  const location = useLocation();
  const isOnClassesPage = location?.pathname?.includes("classes");
  const [loading, setLoading] = useState(false);
  const [classes, setClasses] = useState([]);
  const textColor = useColorModeValue("text-gray-600", "gray.text");
  const textColorTwo = useColorModeValue("text-gray-500", "gray.text");
  useEffect(() => {
    const fetchPopularClasses = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/classes`
        );
        setClasses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching popular classes:", error);
      }
    };
    fetchPopularClasses();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <section className="py-20">
      <Container>
        {isOnClassesPage ? (
          <h2
            className={`text-xl md:text-3xl lg:text-4xl font-bold text-center pb-8 tracking-wide ${textColor}`}
          >
            Our Classes
          </h2>
        ) : (
          <h2
            className={`text-xl md:text-3xl lg:text-4xl font-bold text-center pb-8 tracking-wide ${textColor}`}
          >
            Popular Classes
          </h2>
        )}
        <p
          className={`lg:px-20 md:px-10 leading-normal text-center text-lg tracking-wide font-semibold pb-10 ${textColorTwo}`}
        >
          Our All classes is a highly sought-after program designed for
          individuals looking to enhance their spoken English skills in a <br />{" "}
          supportive and interactive environment. Led by our experienced
          instructor, John Doe, this class focuses on fostering fluency,
          confidence, <br /> and effective communication through engaging
          conversations and activities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {classes
            ?.sort((a, b) => a.students - b.students)
            .map((classItem) => (
              <ClassCard key={classItem._id} classItem={classItem} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularClassesSection;
