import { sendMessage } from "./post_to_slack";
const { WebClient } = require("@slack/web-api");
import { vi } from "vitest";


describe.concurrent("sendMessage", () => {
  it("Slack web-api is called", async () => {
    // Arrange
  const token = 'your-token'
  const title = 'Your Title'
  const description = 'Your Description'
  const imageUrl = 'https://png.pngtree.com/element_our/png/20181227/link-glyph-black-icon-png_292930.jpg'
  const web = new WebClient(token)
  const postMessageMock = vi.fn(async () => ({}))
  web.chat.postMessage = postMessageMock

  // Act
  await sendMessage(web, token, title, description, imageUrl)

  // Assert
  expect(postMessageMock).toBeCalled();
  });
});
