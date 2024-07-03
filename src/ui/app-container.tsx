import type { ReactNode } from "react";

type AppContainerProps = {
  children: ReactNode;
};

function AppContainer({ children }: AppContainerProps) {
  return <div className="flex flex-col w-screen min-h-screen bg-neutral-100">{children}</div>;
}

export { AppContainer };
