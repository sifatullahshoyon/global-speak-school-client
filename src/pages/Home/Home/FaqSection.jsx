import React from "react";
import Container from "../../../components/shared/Container";
import { useColorModeValue } from "@chakra-ui/react";
import FAQ from "../../../components/FAQ";

const FaqSection = () => {
  const textColor = useColorModeValue("text-gray-600", "gray.text");
  const textColorTwo = useColorModeValue("text-gray-500", "gray.text");
  return (
    <section className="py-20 bg-gray-100">
      <Container>
        <h2
          className={`text-xl md:text-3xl lg:text-4xl font-extrabold text-center pb-8 tracking-wide ${textColor}`}
        >
          Frequently <span className="text-amber-500">Asked</span> Question
        </h2>
        <p
          className={`lg:px-20 md:px-10 leading-normal text-center text-lg tracking-wide font-semibold pb-10 ${textColorTwo}`}
        >
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the <br /> middle of text.
        </p>
        <div className="py-5 lg:px-20 mx-auto">
          <FAQ />
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
