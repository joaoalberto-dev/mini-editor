import type { WithChildren } from "@/types/with-children";

type PlayerProps = WithChildren;

function Player({ children }: PlayerProps) {
  return (
    <div className="h-[600px] border-b border-neutral-300 bg-neutral-200 flex items-center justify-center">
      {children}
    </div>
  );
}

export { Player };
