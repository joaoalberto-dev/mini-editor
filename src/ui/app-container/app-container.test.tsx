import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { AppContainer } from "./app-container";

test("AppContainer", async () => {
  render(<AppContainer>TEST</AppContainer>);

  const element = screen.getByText(/TEST/);
  expect(element).toBeInTheDocument();
});
