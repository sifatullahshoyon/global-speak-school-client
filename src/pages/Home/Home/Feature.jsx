import React, { useEffect, useState } from "react";
import Container from "../../../components/shared/Container";
import { getAllFeature } from "../../../api/feature";
import Loader from "../../../components/shared/Loader";
import SimpleCard from "../../../components/shared/Card/SimpleCard";
import { useColorModeValue } from "@chakra-ui/react";

const Feature = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(false);
  const textColor = useColorModeValue("text-gray-600", "gray.text");
  const textColorTwo = useColorModeValue("text-gray-500", "gray.text");

  useEffect(() => {
    setLoading(true);
    getAllFeature()
      .then((data) => {
        setFeatures(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <section className="py-20">
      <Container>
        <div>
          <h1
            className={`text-xl md:text-3xl lg:text-4xl font-bold text-center pb-8 tracking-wide ${textColor}`}
          >
            Welcome to{" "}
            <span className="text-amber-600">Global Speak School</span>
          </h1>
          <p
            className={`text-center text-lg tracking-wide font-semibold pb-10 ${textColorTwo}`}
          >
            Dive into a world of language mastery with our tailored <br />{" "}
            features, crafted to empower students in their journey at Global
            Speak School
          </p>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 mx-auto"
          >
            {features?.map((feature) => (
              <SimpleCard key={feature._id} feature={feature} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Feature;
