import type { WithChildren } from "@/types/with-children";

type PlaybackSectionProps = WithChildren;

function PlaybackSection({ children }: PlaybackSectionProps) {
  return (
    <div className="h-[600px] flex items-center justify-center relative">
      {children}
    </div>
  );
}

export { PlaybackSection };
