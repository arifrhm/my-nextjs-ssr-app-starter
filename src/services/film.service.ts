// src/services/film.service.ts
import { Film } from "@/types/film";

export const FilmService = {
  getFilms: async (): Promise<Film[]> => {
    try {
      const res = await fetch('https://swapi.dev/api/films/', {
        next: { revalidate: 3600 }
      });
      
      if (!res.ok) throw new Error('Failed to fetch films');
      
      const data = await res.json();
      return data.results;
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  }
}