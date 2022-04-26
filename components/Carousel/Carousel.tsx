import { useState } from "react";

const Carousel = () => {
  //
  const items: number = 3;
  const [active, setActive] = useState<number>(0);
  console.log(active);
  const toggleActive = () => {
    console.log("CLICK");
    if (active >= items) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  return <></>;
};

export default Carousel;
