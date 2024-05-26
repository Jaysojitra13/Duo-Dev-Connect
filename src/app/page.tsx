import { db } from "@/db";

export default async function Home() {
  const data = await db.query.room.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.map((room) => {
        return <div key={room.id}>{room.name}</div>;
      })}
    </main>
  );
}
