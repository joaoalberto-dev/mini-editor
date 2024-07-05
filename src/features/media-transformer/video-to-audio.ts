import type { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

async function videoToAudio(ffmpeg: FFmpeg, video: File) {
  const videoUrl = URL.createObjectURL(video);
  const operations = ["-i", video.name, "-vn", "-acodec", "copy", "output.aac"];

  ffmpeg.writeFile(video.name, await fetchFile(videoUrl));
  ffmpeg.exec(operations);

  const output = await ffmpeg.readFile("output.aac");
  const audio = new Uint8Array(output as ArrayBuffer);

  return audio;
}

export { videoToAudio };
