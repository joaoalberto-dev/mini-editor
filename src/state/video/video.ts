import { create } from "zustand";

type VideoStore = {
  video: File | null;
  setVideo: (video: File) => void;
  clearVideo: () => void;
};

const useVideoStore = create<VideoStore>((set) => ({
  video: null,
  setVideo: (video: File) => {
    if (video instanceof File === false) {
      throw new Error("Param 'video' is not a valid File");
    }

    return set({ video });
  },
  clearVideo: () => set({ video: null }),
}));

export { useVideoStore };
