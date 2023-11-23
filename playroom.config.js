module.exports = {
  components: "./components.ts",
  snippets: "./snippets.ts",
  themes: "./themes.ts",
  frameComponent: "./frame.tsx",
  outputPath: "./dist",
  widths: [320, 768, 1024],
  exampleCode: `<Container size="1">
  <Card size="4">
    <Heading size="6" mb="5">
      Sign up
    </Heading>
    <Box mb="5">
      <label>
        <Text weight="bold" size="2">
          Email address
        </Text>
        <TextField.Root mt="2">
          <TextField.Input placeholder="Enter your email" />
        </TextField.Root>
      </label>
    </Box>
    <Flex justify="end" gap="3">
      <Button variant="outline">Create an account</Button>
      <Button>Sign in</Button>
    </Flex>
  </Card>
</Container>`,
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
