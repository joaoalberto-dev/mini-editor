import type { WithChildren } from "@/types/with-children";

type PlayerProps = WithChildren;

function Player({ children }: PlayerProps) {
  return (
    <div className="min-h-[600px] border-b-2 bg-neutral-200 flex items-center justify-center">
      {children}
    </div>
  );
}

export { Player };
