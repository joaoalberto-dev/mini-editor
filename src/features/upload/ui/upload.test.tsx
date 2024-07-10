import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import * as actions from "@state/editor/actions/set-video-file";
import { Upload } from "./upload";

const mockFn = vi.fn();
const mockFile = new File([], "mock", { type: "video/mp4" });

vi.spyOn(actions, "setVideoFile").mockImplementation(mockFn);

describe("<Upload />", () => {
  it("should call the event handler correctly when user upload a file", async () => {
    const user = userEvent.setup();

    render(<Upload />);

    const input = screen.getByLabelText(/Click or drag a file to start/);
    expect(input).toBeInTheDocument();

    user.upload(input, mockFile);

    await waitFor(() => {
      expect(mockFn).toBeCalled();
    });
  });
});
