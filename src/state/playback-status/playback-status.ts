import { create } from "zustand";

type PlaybackStatusStore = {
  playing: boolean;
  canPlay: boolean;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  enablePlayback: () => void;
};

const usePlaybackStatus = create<PlaybackStatusStore>((set) => ({
  playing: false,
  canPlay: false,
  play: () => set({ playing: true }),
  pause: () => set({ playing: false }),
  toggle: () => set((state) => ({ playing: !state.playing })),
  enablePlayback: () => set({ canPlay: true }),
}));

export { usePlaybackStatus };
