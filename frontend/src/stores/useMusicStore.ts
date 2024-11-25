import { axiosInstance } from "@/lib/axios";
import { Album, Song } from "@/types";
import { create } from "zustand";

interface MusicStore {
  albums: Album[];
  songs: Song[];
  isLoading: boolean;
  error: string | null;
  fetchAlbums: () => void;
}

export const useMusicStore = create<MusicStore>((set) => ({
  albums: [],
  songs: [],
  isLoading: false,
  error: null,

  fetchAlbums: async () => {
    set({isLoading: true, error: null});

    try {
      const response = await axiosInstance.get("/albums");
      set({albums: response.data})
    } catch (error: any) {
      set({error: error.response.data.message});
    } finally {
      set({isLoading: false})
    }
  }
}))