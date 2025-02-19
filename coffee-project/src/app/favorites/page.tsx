export default async function page() {

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col rounded-md bg-neutral-100">
        <div className="p-4 font-bold rounded-t-md bg-neutral-200">
          Current Session
        </div>
        <pre className="py-6 px-4 whitespace-pre-wrap break-all">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
      {/* TODO お気に入りしたものを表示させたい。getUserFavorites関数を作成するかなー。
      JSONではfsを使わないとPOSTできないから、DB使わないとかも。Prismaありやで。 */}
    </div>
  );
}
