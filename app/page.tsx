import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <Image
            src="https://bbcincorp.com/assets/images/hk/home/banner-hk-home.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={1920}
            height={500}
            priority
          />
        </div>
      </main>
    </>
  );
}
