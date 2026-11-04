import type { ResolvingMetadata } from "next";
import ContentPage, {
  generateMetadata,
} from "@/app/works/[id]/page";
import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import { SITE_CONFIG } from "@/lib/constants";
import { client } from "@/lib/utils/client";

vi.mock("@/lib/utils/client", () => ({
  client: { get: vi.fn() },
}));

const content = {
  id: "sample-work",
  title: "Sample work",
  body: "Project description",
  image: [
    { url: "https://images.microcms-assets.io/sample.png" },
  ],
  technology: "Next.js",
};

describe("work detail async route params", () => {
  beforeEach(() => {
    vi.mocked(client.get).mockReset();
    vi.mocked(client.get).mockResolvedValue(content);
  });

  it("loads the requested work after resolving params", async () => {
    const page = await ContentPage({
      params: Promise.resolve({ id: content.id }),
    });

    expect(page).toBeTruthy();
    expect(client.get).toHaveBeenCalledWith({
      endpoint: "works",
      contentId: content.id,
    });
  });

  it("preserves work metadata and canonical URL with promised params", async () => {
    const parent = Promise.resolve({
      openGraph: {
        images: ["https://example.com/parent.png"],
      },
    }) as ResolvingMetadata;
    const metadata = await generateMetadata(
      { params: Promise.resolve({ id: content.id }) },
      parent,
    );

    expect(client.get).toHaveBeenCalledWith({
      endpoint: "works",
      contentId: content.id,
    });
    expect(metadata).toMatchObject({
      title: content.title,
      description: content.body,
      alternates: {
        canonical: `${SITE_CONFIG.url}/works/${content.id}`,
      },
      openGraph: {
        images: [
          content.image[0].url,
          "https://example.com/parent.png",
        ],
      },
    });
  });
});
