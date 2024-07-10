import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { PlaybackSection } from "./playback-section";

test("PlaybackSection", async () => {
  render(<PlaybackSection>PlaybackSection</PlaybackSection>);

  const element = screen.getByText(/PlaybackSection/);
  expect(element).toBeInTheDocument();
});
