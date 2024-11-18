import { NavHead, NavFoot } from "./nav-link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div>
        <NavHead />
      </div>
      <div className="mt-5 p-5 sm:mt-10">{children}</div>
      <div>
        <NavFoot />
      </div>
    </main>
  );
}
