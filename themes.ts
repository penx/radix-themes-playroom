import { Theme } from "@radix-ui/themes";

export const Light: React.ComponentProps<typeof Theme> = {
  accentColor: "blue",
  appearance: "light",
  grayColor: "auto",
  panelBackground: "translucent",
  radius: "medium",
  scaling: "100%",
};

export const Dark: React.ComponentProps<typeof Theme> = {
  ...Light,
  appearance: "dark",
};
