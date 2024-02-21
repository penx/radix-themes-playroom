const icons = require("@radix-ui/react-icons");
const themes = require("@radix-ui/themes");

const { useThemeContext, ...themesComponents } = themes;

module.exports = {
  ...icons,
  ...themesComponents,
};
