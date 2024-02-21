const React = require("react");
const { Box, Theme } = require("@radix-ui/themes");

require("./frame.css");

export default function FrameComponent({ theme, children }) {
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
