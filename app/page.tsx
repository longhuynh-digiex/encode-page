import WorkingArea from "@/src/components/WorkingArea";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen items-center justify-start font-sans">
      <header className="mt-8">
        <h1 className="flex-center text-2xl font-bold">Decode 64 base</h1>
        <h2>Decode 64 base - Simplifying Data Encoding and Decoding</h2>
      </header>
      <div className="w-1/2 mt-8 grow">
          <WorkingArea />
      </div>
    </div>
  );
}
