import React, { useEffect, useRef } from "react";

import lottie from "lottie-web";
import logo from "../../../assets/logo";

export default function Logo() {
  const logoRef = useRef(null);

  useEffect(() => {
    lottie
      .loadAnimation({
        container: logoRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: logo,
      })
      .setSpeed(1);
  }, []);

  return (
    <div ref={logoRef}></div>
  );
};