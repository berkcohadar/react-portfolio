import hacker from "../../assets/hacker.json";
import { useLottie } from "lottie-react";

const Hacker = () => {
  const options = {
    animationData: hacker,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default Hacker;