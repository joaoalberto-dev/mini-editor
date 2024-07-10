import type { WithChildren } from "@/types/with-children";

type AppContainerProps = WithChildren;

function AppContainer({ children }: AppContainerProps) {
  return (
    <div className="flex flex-col w-screen h-screen">
      {children}
    </div>
  );
}

export { AppContainer };
