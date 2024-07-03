import { create } from "zustand";

type VideoSettings = {
  width: number;
  height: number;
  aspect: number;
  duration: number;
};

type VideoStore = {
  video: File | null;
  settings: VideoSettings | null;
  setVideo: (video: File) => void;
  clearVideo: () => void;
  setSettings: (settings: VideoSettings) => void;
};

const useVideoStore = create<VideoStore>((set) => ({
  video: null,
  settings: null,
  setVideo: (video: File) => {
    if (video instanceof File === false) {
      throw new Error("Param 'video' is not a valid File");
    }

    return set({ video });
  },
  clearVideo: () => set({ video: null, settings: null }),
  setSettings: (settings: VideoStore["settings"]) => set({ settings }),
}));

export { useVideoStore };
