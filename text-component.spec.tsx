import { expect, test } from "@playwright/experimental-ct-react";
import { TextComponent } from "./text-component";

test("text component", async ({ mount }) => {
  const component = await mount(<TextComponent />);
  await expect(component).toContainText("Hello World!");
});
