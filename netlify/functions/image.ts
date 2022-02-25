import { createIPXHandler } from "@netlify/ipx"

export const handler = createIPXHandler({
  domains: ["wpgatsbydemo.wpengine.com"],
  propsEncoding: "base64",
  basePath: "/_gatsby/image/",
})
