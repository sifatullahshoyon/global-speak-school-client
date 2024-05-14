import React from "react";
import Container from "../../../components/shared/Container";

const Subcribe = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="w-11/12 bg-amber-500 h-60 mx-auto rounded overflow-hidden">
          <div className="flex flex-col md:flex md:flex-row w-full h-full justify-around items-center p-5">
            <div className="text-balance text-lg md:text-xl lg:text-3xl font-bold">Subcribe Today For Newletter</div>
            <div className="join p-2">
              <input
                className="input input-bordered join-item"
                placeholder="Email"
              />
              <button className="btn join-item rounded-r-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Subcribe;
