import { render, screen } from "@testing-library/react";
import { Options } from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByTestId("imgScoops", {
    name: /scoop$/i,
  });
  expect(scoopImages).toHaveLength(2);

  //confrom alt tect of images

  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocalte scoop", "Vanilla scoop"]);
});
