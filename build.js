require("esbuild")
  .build({
    entryPoints: ["app.js"],
    outfile: "dist/app.min.js",
    bundle: true,
    minify: true,
    platform: "node"
  })
