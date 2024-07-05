import { useEffect, useRef, useState } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";

const VERSION = "0.12.6";
const BASE_URL = `https://unpkg.com/@ffmpeg/core-mt@${VERSION}/dist/esm`;
const CORE_URL = `${BASE_URL}/ffmpeg-core.js`;
const WASM_URL = `${BASE_URL}/ffmpeg-core.wasm`;
const WORKER_URL = `${BASE_URL}/ffmpeg-core.worker.js`;

function useFFMPEG() {
  const [loaded, setLoaded] = useState(false);
  const ffmpegRef = useRef(new FFmpeg());

  useEffect(() => {
    async function load() {
      try {
        const ffmpeg = ffmpegRef.current;

        await ffmpeg.load({
          coreURL: await toBlobURL(CORE_URL, "text/javascript"),
          wasmURL: await toBlobURL(WASM_URL, "application/wasm"),
          workerURL: await toBlobURL(WORKER_URL, "text/javascript"),
        });

        setLoaded(ffmpeg.loaded);
      } catch {
        setLoaded(false);
      }
    }

    load();
  }, []);

  if (!loaded) return null;
  return ffmpegRef.current;
}

export { useFFMPEG };
