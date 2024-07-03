import type { WithChildren } from "@/types/with-children";

type AppContainerProps = WithChildren;

function AppContainer({ children }: AppContainerProps) {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-neutral-100">
      {children}
    </div>
  );
}

export { AppContainer };
