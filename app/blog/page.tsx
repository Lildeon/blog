import Layout from "../components/ui/layout";
import { Category } from "../components/ui/Category";
import { Featured } from "../components/ui/Featured";
import { Top_Trend } from "../components/ui/Top-Trend";
import { Recent } from "../components/ui/Recent";
import NewlyRelease from "../components/ui/NewlyRelease";

export default function Home() {
  return (
    <Layout>
      <main>
        <Category />
        <Featured />
        <NewlyRelease />
        <Top_Trend />
        <Recent />
      </main>
    </Layout>
  );
}
