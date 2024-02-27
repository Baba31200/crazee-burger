import { useState } from "react";

import { fakeBasket } from "../fakeData/fakeBasket";
export const useBasket = () => {
  const [basket, useBasket] = useState(fakeBasket.LARGE);

  return { basket };
};
