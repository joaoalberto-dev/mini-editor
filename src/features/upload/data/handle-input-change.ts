import type { ChangeEvent } from "react";

function handleInputChange(onSucces: (file: File) => void) {
  return function handler(event: ChangeEvent<HTMLInputElement>) {
    if (
      event?.target instanceof HTMLInputElement &&
      event?.target?.files &&
      event?.target?.files?.length > 0
    ) {
      const file = event?.target?.files[0];

      if (!file?.type?.includes("video")) {
        throw new Error("The file must be a valid video format");
      }

      onSucces(file);
    }
  };
}

export { handleInputChange };
