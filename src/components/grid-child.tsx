function gridChild() {
  return (
    <>
      <div className="col-span-1 bg-slate-50 drop-shadow-lg rounded-lg p-4 flex flex-col text-left items-center">
        <img
          src="https://placehold.co/400x300"
          alt="test"
          className="rounded-lg"
        />
        <div className="text-zinc-800">
          <time dateTime="20240317" className="text-sm text-zinc-700 mt-2">
            March 17 2024
          </time>
          <h2 className="text-base font-bold mb-1">
            Placeholder Title With A Long Name
          </h2>
          <p className="text-sm text-zinc-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
}

export default gridChild;
