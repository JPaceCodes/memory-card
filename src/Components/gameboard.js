import Card from "./card";

const Gameboard = (props) => {
  return (
    <div className="ui four column internally celled grid">
      <Card {...props} />
    </div>
  );
};

export default Gameboard;