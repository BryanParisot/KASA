const Banner = (props) => {
  return (
    <div className="banner">
      <h1>{props.title}</h1>
      <img src={props.src} alt={props.src}></img>
    </div>
  );
};
export default Banner;
