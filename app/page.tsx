import { ChatBot } from "@/components/ChatBot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 lg:px-24 md:px-20 px-16<">
      <div className="lg:bg-[#f5f5f5] lg:text-[#584de6] bg-transparent text-white p-20 rounded-xl shadow-xl">
        <h2 className="lg:text-3xl text-2xl mb-6 font-bold text-center">
          Bienvenido al tester del chatbot de{" "}
        </h2>
        <h1 className="text-5xl font-bold text-center">EstudioZero</h1>
        <h2 className="lg:text-3xl text-2xl font-bold text-center mt-32">
          Conoce a Virgilio
        </h2>
      </div>
      <ChatBot />
    </main>
  );
}
