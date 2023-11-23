import type { ThemeOptions } from "@radix-ui/themes";

export const Light: ThemeOptions = {
  accentColor: "blue",
  appearance: "light",
  grayColor: "auto",
  panelBackground: "translucent",
  radius: "medium",
  scaling: "100%",
};

export const Dark: ThemeOptions = {
  ...Light,
  appearance: "dark",
};
