import { useState } from "react";

const DropDown = (props, equipement = null) => {
  const [selected, setSelected] = useState(false);

  const onClickTrue = () => setSelected(true);
  const onClickFalse = () => setSelected(false);

  return (
    <div className="dropDownLitlle">
      <div className="contain">
        <div
          className="contain_title_svg"
          onClick={selected ? onClickFalse : onClickTrue}
        >
          <p>{props.title}</p>
          {selected === true ? (
            <svg
              width="24"
              height="15"
              viewBox="0 0 24 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="25"
              height="15"
              viewBox="0 0 25 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.66344 0.85955L0.530518 3.00468L12.4604 14.9234L24.3903 2.99263L22.2574 0.85955L12.4604 10.6572L2.66344 0.85955Z"
                fill="white"
              />
            </svg>
          )}
        </div>
        <div className={selected ? "show" : "contain_text"}>
          {props.equipement === undefined ? (
            <p>{props.content} </p>
          ) : (
            props.equipement.map((i) => <p className="text_list" key={i}> {i}</p>)
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
