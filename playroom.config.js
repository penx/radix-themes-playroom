module.exports = {
  components: "./components.ts",
  snippets: "./snippets.ts",
  themes: "./themes.ts",
  frameComponent: "./frame.tsx",
  outputPath: "./dist",
  widths: [320, 768, 1024],
  // widths: [320, 520,768, 1024, 1280, 1640],
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                babelrc: false,
                presets: [
                  "@babel/preset-env",
                  ["@babel/preset-react", { runtime: "automatic" }],
                  "@babel/preset-typescript",
                ],
              },
            },
          ],
        },
        {
          test: /frame\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  }),
};
