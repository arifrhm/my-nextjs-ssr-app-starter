// src/app/page.tsx
import { LogoHeader } from "@/components/Header/LogoHeader";
import { FilmsList } from "@/components/Films/FilmsList";
import { DeployButton } from "@/components/Buttons/DeployButton";
import { ReadDocsButton } from "@/components/Buttons/ReadDocsButton";
import { Footer } from "@/components/Footer/Footer";
import { FilmService } from "@/services/film.service";

export default async function Home() {
  const films = await FilmService.getFilms();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <LogoHeader />

        <div className="space-y-4 max-w-2xl">
          <h1 className="text-2xl font-bold">Star Wars Films Collection</h1>
          <FilmsList films={films} />
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <DeployButton />
          <ReadDocsButton />
        </div>
      </main>

      <Footer />
    </div>
  );
}
