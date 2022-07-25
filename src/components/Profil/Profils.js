import React from "react";

const Profils = (props) => {
  return (
    <>
      {" "}
      <div className="profil">
        <p>{props.name}</p>
        <div className="picture">
          <img src={props.img} alt={props.name} />
        </div>
      </div>
      <div className="contain_stars">
        <ul>
          {Array.from(Array(parseInt(props.rating - 1)), (e, i) => {
            return (
              <svg
                key={i}
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                  fill="#FF6060"
                />
              </svg>
            );
          })}

          {Array.from(Array(5 - parseInt(props.rating - 1)), (e, i) => {
            return (
              <svg
                key={i}
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                  fill="#E3E3E3"
                />
              </svg>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Profils;
