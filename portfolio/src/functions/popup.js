import { useEffect, useState } from "react";

export function popup(
  animationDirection = "left",
  letterDirection = "forwards"
) {
  //

  const popupPosition = () => {
    if (animationDirection === "top") {
      document.querySelectorAll(".tar").forEach((tar) => {
        tar.style.transform = `translateY(${100}px)`;
      });
    } else if (animationDirection === "bottom") {
      document.querySelectorAll(".tar").forEach((tar) => {
        tar.style.transform = `translateY(${-100}px)`;
      });
    } else if (animationDirection === "left") {
      document.querySelectorAll(".tar").forEach((tar) => {
        tar.style.transform = `translateX(${600}px)`;
      });
    } else if (animationDirection === "right") {
      document.querySelectorAll(".tar").forEach((tar) => {
        tar.style.transform = `translateX(${-600}px)`;
      });
    }
  };

  //
  //
  const delay = 0.1;
  //
  //
  const animation = () => {
    let initDelay = 0.5;
    if (letterDirection === "forwards") {
      document.querySelectorAll(".tar").forEach((tar) => {
        tar.style.animation = `appear ${delay}s linear ${initDelay}s 1 normal forwards`;
        initDelay += delay;
      });
    } else if (letterDirection === "backwards") {
      Array.from(document.querySelectorAll(".tar"))
        .reverse()
        .forEach((tar) => {
          tar.style.animation = `appear ${delay}s linear ${initDelay}s 1 normal forwards`;
          initDelay += delay;
        });
    }
  };

  //

  useEffect(() => {
    //
    // Set Position
    popupPosition();
    //
    // Set Animation
    animation();
  }, []);
}
