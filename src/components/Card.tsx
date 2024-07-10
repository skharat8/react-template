import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import { FaRetweet } from "react-icons/fa";

import useToggle from "@/hooks/useToggle";
import ButtonIcon from "./ButtonIcon";
import Avatar from "./Avatar";

function Card() {
  const [like, toggleLike] = useToggle({ initialValue: false });

  const gridStyles = {
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    gridTemplateColumns: "3.25rem 1fr",
    gridTemplateAreas: '"avatar header" ". text" ". buttons"',
  };

  return (
    <div className="h-40 w-4/5 bg-neutral-300" style={gridStyles}>
      <Avatar />
      <h2 className="text-md font-semibold" style={{ gridArea: "header" }}>
        John Smith
      </h2>
      <p style={{ gridArea: "text" }}>Wall of Text</p>

      <div
        className="align-center flex justify-evenly"
        style={{ gridArea: "buttons" }}
      >
        <ButtonIcon onClick={toggleLike}>
          {like ? <RiHeart3Fill /> : <RiHeart3Line />}
        </ButtonIcon>
        <ButtonIcon>
          <FaRetweet />
        </ButtonIcon>
      </div>
    </div>
  );
}

export default Card;
