import { create } from "zustand";

interface locationDataStore {
    month:string;
    setMonth:(value:string) => void;
    location:string;
    setLocation:(value:string) => void;
    column:string;
    setColumn:(value:string) => void;
}

const useLocationDataStore = create<locationDataStore>((set) => ({
    month: "",
    setMonth: (value:string) => set((state: {month:string}) => ({
        month: (state.month = value),
    })),
    location: "",
    setLocation: (value:string) => set((state: {location:string}) => ({
        location: (state.location = value),
    })),
    column: "",
    setColumn: (value:string) => set((state: {column:string}) => ({
        column: (state.column = value),
    }))
}));

export default useLocationDataStore;
export type {locationDataStore};