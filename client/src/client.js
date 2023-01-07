import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "e5setl2q",
  dataset: "production",
  apiVersion: "v1",
  useCdn: true,
  token:
    "sk2Xkah0wOXduaQAnseCyJJuEhao5LOH4hxcgUspRJIHSgbBSapq60F0aPSLfXNWVc0igsftT2DqA1qyPDAVm4XY3953ZOZ4c4jWMWNh3hiFp4fOk7hgZaNe6PIySo4DvqTIK6SfiAKUK6BjAXEe4qm6Wf7oZcyf74H6gB7Rr6D2WRqHA18W",
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
