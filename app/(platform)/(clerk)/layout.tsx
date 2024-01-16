import Image from "next/image";

const ClerkLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <Image
              alt="Pattern"
              src="/navscreen.gif"
              className="hidden xl:block h-full w-full object-cover bg-no-repeat"
            />
          </aside>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 bg-[url('/hand.jpg')] bg-center bg-cover"
          >
            <div className="max-w-xl lg:max-w-3xl mx-auto my-auto ">
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                {children}
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default ClerkLayout;
