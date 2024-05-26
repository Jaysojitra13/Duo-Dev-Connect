import { db } from "@/db";

export default async function Home() {
  const data = await db.query.testing.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map((d) => {
        return <div key={d.id}>{d.name}</div>;
      })}
    </main>
  );
}
