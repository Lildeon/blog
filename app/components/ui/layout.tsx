import { NavHead, NavFoot } from "./nav-link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div>
        <NavHead />
      </div>
      <div className="mt-24 p-5">{children}</div>
      <div>
        <NavFoot />
      </div>
    </main>
  );
}
