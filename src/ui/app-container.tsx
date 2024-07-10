import type { WithChildren } from "@/types/with-children";

type AppContainerProps = WithChildren;

function AppContainer({ children }: AppContainerProps) {
  return (
    <div className="w-screen h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      {children}
    </div>
  );
}

export { AppContainer };
