import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import * as data from "./handle-input-change";

const mockFn = vi.fn();
const mockFile = new File([], "mock", { type: "video/mp4" });

describe("handleInputChange", () => {
  it("should call handleInputChange correctly when user upload a file", async () => {
    const user = userEvent.setup();

    render(
      <input
        type="file"
        role="button"
        onChange={data.handleInputChange(mockFn)}
      />,
    );

    const input = screen.getByRole("button");

    user.upload(input, mockFile);

    await waitFor(() => {
      expect(mockFn).toBeCalled();
    });
  });
});
