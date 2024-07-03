import { expect, it, describe } from "vitest";
import { act, renderHook } from "@testing-library/react";

import { useVideoStore } from "./video";

const mockFile = new File([], "mock.mp4");

describe("useVideoStore", () => {
  it("should start null", () => {
    const { result } = renderHook(() => useVideoStore());
    expect(result.current.video).toBe(null);
  });

  it("should change file", async () => {
    const { result } = renderHook(() => useVideoStore());

    act(() => {
      result.current.setVideo(mockFile);
    });

    expect(result.current.video).toBeInstanceOf(File);
  });

  it("should clear file", async () => {
    const { result } = renderHook(() => useVideoStore());

    act(() => {
      result.current.setVideo(mockFile);
    });

    expect(result.current.video).toBeInstanceOf(File);

    act(() => {
      result.current.clearVideo();
    });

    expect(result.current.video).toBe(null);
  });

  it("should throw if file is wrong", async () => {
    const { result } = renderHook(() => useVideoStore());

    expect(() => {
      act(() => {
        // @ts-expect-error - Only for tests
        result.current.setVideo("unxpected string");
      });
    }).toThrow("Param 'video' is not a valid File");
  });
});
