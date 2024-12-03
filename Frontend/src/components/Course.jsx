import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards"
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you here!{" "}
            <span className="text-pink-500">:)</span>
          </h1>
          <p className="mt-12">
            I'm thrilled to be here and ready to assist you with anything you
            need! Whether it's coding help, project ideas, or general queries,
            feel free to ask. My goal is to provide efficient and clear answers
            to support your learning and development. Let's make this experience
            productive and enjoyable together!
          </p>
          <Link to="/">
          <button className=" mt-6 px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-700 duration-200 cursor-pointer">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                list.map((item)=>(
                    <Cards item={item} key={item.id}/>
                ))
            }
        </div>
      </div>
    </>
  );
}

export default Course;
