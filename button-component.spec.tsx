import { expect, test } from "@playwright/experimental-ct-react";
import { ButtonComponent } from "./button-component";

test("text component", async ({ mount }) => {
  const component = await mount(<ButtonComponent />);
  await expect(component).toContainText("Hello Button!");
});
