type CornerElementoType = {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

function getCornerPosition(position: string) {
  switch (position) {
    case "top-left":
      return "top-0 left-0 -translate-x-1/2 -translate-y-1/2";
    case "top-right":
      return "top-0 right-0 translate-x-1/2 -translate-y-1/2";
    case "bottom-left":
      return "bottom-0 left-0 -translate-x-1/2 translate-y-1/2";
    case "bottom-right":
      return "bottom-0 right-0 translate-x-1/2 translate-y-1/2";
    default:
      return "";
  }
}

const CornerElement = ({ position }: CornerElementoType) => {
  return (
    <div
      className={`absolute h-4 w-4 border text-outline ${getCornerPosition(position)}`}
    ></div>
  );
};

export default CornerElement;
