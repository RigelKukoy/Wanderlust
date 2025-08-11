import { Compass } from "lucide-react";
import Image from "next/image";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      <aside className="w-full lg:w-1/2">
        <div className="flex flex-col p-3 md:p-6 md:pt-4">
          <div className="hidden flex-1 flex-col items-center justify-center gap-3 lg:flex lg:gap-4">
            <div className="flex flex-row items-center justify-center gap-2">
              <Compass size={55} strokeWidth={3} />
              <h1 className="text-3xl font-black">WANDERLUST</h1>
            </div>
            <div className="flex items-center justify-center">
              <h2 className="text-center leading-13 font-extrabold text-[#3E8EED] lg:text-6xl lg:leading-20">
                Welcome to Your Next Journey
              </h2>
            </div>
            <div className="flex items-center justify-center">
              <h3 className="text-center text-base leading-6 font-light lg:text-xl lg:leading-8">
                Whether you're back for more or just starting out, dive into new
                destinations, share your stories, and connect with a world of
                travelers.
              </h3>
            </div>
          </div>
          <div className="flex flex-1 justify-end">
            <div className="relative mt-6 flex h-[200px] w-full md:h-[250px] lg:h-[320px]">
              <Image
                src="/AuthPageImage.png"
                alt="Auth page photo"
                className="rounded-2xl object-cover"
                fill
              />
              <div className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-3 left-10 z-50 flex flex-col text-white">
                <div className="flex flex-row items-center gap-2">
                  <div>
                    <Compass
                      className="h-6 w-6 md:h-10 md:w-10 lg:h-12 lg:w-12"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="text-base font-bold md:text-2xl">
                    Wanderlust
                  </div>
                </div>
                <div className="text-[11px] font-light md:text-base">
                  Discover. Share. Connect.
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex flex-1 items-center justify-center p-5">
        {children}
      </main>
    </div>
  );
}

export default Layout;
