// src/components/Films/FilmsList.tsx
import { Film } from "@/types/film";

interface FilmsListProps {
  films: Film[];
}

export function FilmsList({ films }: FilmsListProps) {
  if (!films.length) {
    return <div className="text-red-500">Failed to load films data</div>;
  }

  return (
    <ul className="space-y-3 bg-white/[.02] p-6 rounded-lg border border-white/[.05]">
      {films.map((film) => (
        <li
          key={film.episode_id}
          className="p-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <h2 className="font-semibold text-lg">{film.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">
            {film.opening_crawl}
          </p>
        </li>
      ))}
    </ul>
  );
}