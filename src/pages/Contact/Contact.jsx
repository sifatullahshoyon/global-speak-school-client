import React from "react";
import Title from "../../components/Title";
import Container from "../../components/shared/Container";
import useScrollPosition from "../../hooks/useScrollPosition";
import ContactForm from "../../components/ContactForm/ContactForm";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const scrolled = useScrollPosition();
  return (
    <div
      className={`w-full ${scrolled ? "top-0" : ""}  transition duration-500 ${
        scrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      {/* Dynamic Title */}
      <Title title="Contact" />
      <Container>
        <div className="py-20">
          <div className="pt-20 md:flex justify-between gap-12">
            {/* Get In Touch */}
            <div data-aos="fade-left">
              <h3 className="text-lg md:text-xl lg:text-3xl font-bold">
                Get In <span className="text-amber-500">Touch</span>
              </h3>
              <p className="tracking-wide py-5 text-gray-700 text-xs md:text-lg xl:text-xl leading-normal">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text.
              </p>
              <ContactForm />
            </div>
            {/* Contact Info */}
            <div data-aos="fade-right">
              <h3 className="text-lg md:text-xl lg:text-3xl font-bold">
                Contact Info
              </h3>
              <p className="tracking-wide py-5 text-gray-700 text-xs md:text-lg xl:text-xl leading-normal">
                Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary, making this the first true generator on the
                Internet. It uses a dictionary.
              </p>
              <div className="py-5">
                <div className="flex items-center gap-4 pb-5">
                  {/* Icon */}
                  <div className="p-4 bg-amber-500 rounded">
                    <FaHome className="text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl lg:text-2xl text-gray-700 tracking-wide pb-1">
                      Address Location
                    </p>
                    <p>1 Grafton Street, Dublin.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pb-5">
                  {/* Icon */}
                  <div className="p-4 bg-amber-500 rounded">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl lg:text-2xl text-gray-700 tracking-wide pb-1">
                      Phone Number
                    </p>
                    <p>+135 (773) 14442</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="p-4 bg-amber-500 rounded">
                    <IoMdMail className="text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl lg:text-2xl text-gray-700 tracking-wide pb-1">
                      Mail Address
                    </p>
                    <p>globalspeakschool.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
