import space_developer from "../../assets/space_developer.json";
import { useLottie } from "lottie-react";

const SpaceHacker = () => {
  const options = {
    animationData: space_developer,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default SpaceHacker;