import space_background from "../../assets/space_background.json";
import { useLottie } from "lottie-react";

const Background = () => {
  const options = {
    animationData: space_background,
    loop: true,
    className: "main-background",
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default Background;