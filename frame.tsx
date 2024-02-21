import React from "react";
import { Box, Theme } from "@radix-ui/themes";

import "./frame.css";

export default function FrameComponent({
  theme,
  children,
}: {
  theme: React.ComponentProps<typeof Theme>;
  children: React.ReactNode;
}) {
  if (theme.appearance && ["light", "dark"].includes(theme.appearance)) {
    if (!document.documentElement.classList.contains(theme.appearance)) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.style.colorScheme = theme.appearance;
      document.documentElement.classList.add(theme.appearance);
    }
  }

  return (
    <Theme {...theme}>
      <Box>{children}</Box>
    </Theme>
  );
}
