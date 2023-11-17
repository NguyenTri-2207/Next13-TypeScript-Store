"use client";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
interface TypeLottieAnimation {
  animationData: any;
  loop?: boolean;
}
const LottieAnimation: React.FC<TypeLottieAnimation> = ({
  animationData,
  loop,
}) => {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        container: container.current,
        animationData: animationData,
        loop: loop || true, // set loop to true by default
        renderer: "svg", // or 'canvas'
        autoplay: true,
      });
    }
  }, [animationData, loop]);

  return <div className="a" ref={container} />;
};

export default LottieAnimation;
