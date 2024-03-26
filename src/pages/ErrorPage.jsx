import React from "react";
import Container from "../components/shared/Container";
import errorImg from "../assets/images/404/404.jpg";
import { useNavigate, useRouteError } from "react-router-dom";
import PrimaryBtn from "../components/Button/PrimaryBtn";

const ErrorPage = () => {
  const { error } = useRouteError();
  const navigate = useNavigate();
  return (
    <Container>
      <div className="h-screen p-5 flex flex-col justify-center items-center">
        <img src={errorImg} alt="error img" className="h-96 object-cover" />
        <p className="text-xl py-5 text-rose-600">
          {error.message ? error.message : "Something Went Wrong!"}
        </p>
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-1/2 px-5 py-1 text-sm text-white transition-colors duration-200 bg-slate-600 border rounded-lg gap-x-2 sm:w-auto hover:bg-slate-700 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:rotate-180 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>Go back</span>
          </button>
          <PrimaryBtn label="Back To Home" onClick={() => navigate("/")} />
        </div>
      </div>
    </Container>
  );
};

export default ErrorPage;
