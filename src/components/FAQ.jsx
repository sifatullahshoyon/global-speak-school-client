import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

const FAQ = () => {
  return (
    <Accordion>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "#F59E0C", color: "white" }}>
            <Box as="span" flex="1" textAlign="left">
              <span className="font-medium">
                How to Education 25 Years Experience?
              </span>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <span className="font-bold">
            It uses a dictionary of over 200 Latin words
          </span>{" "}
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc.If you are going to use a passage of
          Lorem Ipsum.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "#F59E0C", color: "white" }}>
            <Box as="span" flex="1" textAlign="left">
              <span className="font-medium">
                Why to Important to Other Science?
              </span>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <span className="font-bold">
            It uses a dictionary of over 200 Latin words
          </span>{" "}
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc.If you are going to use a passage of
          Lorem Ipsum.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "#F59E0C", color: "white" }}>
            <Box as="span" flex="1" textAlign="left">
              <span className="font-medium">How to Learn to Our teacher?</span>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <span className="font-bold">
            It uses a dictionary of over 200 Latin words
          </span>{" "}
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc.If you are going to use a passage of
          Lorem Ipsum.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
