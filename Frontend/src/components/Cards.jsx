import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="my-5 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-black dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
                {item.title}
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions flex justify-between">
              <div className="p-3 badge badge-outline">₹ {item.price}</div>
              <div className="p-3 badge badge-outline hover:bg-pink-500  duration-150 cursor-pointer hover:text-white ">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
