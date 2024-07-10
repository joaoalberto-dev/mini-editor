import type { WithChildren } from "@/types/with-children";

type PlayerProps = WithChildren;

function Player({ children }: PlayerProps) {
  return (
    <div className="h-[600px] flex items-center justify-center relative">
      {children}
    </div>
  );
}

export { Player };
