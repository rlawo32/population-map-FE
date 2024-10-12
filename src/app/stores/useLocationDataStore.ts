import { create } from "zustand";

interface locationDataStore {
    month:string;
    setMonth:(value:string) => void;
    location:string;
    setLocation:(value:string) => void;
    column:string;
    setColumn:(value:string) => void;
    table:string;
    setTable:(value:string) => void;
    query:string;
    setQuery:(value:string) => void;
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
    })),
    table: "",
    setTable: (value:string) => set((state: {table:string}) => ({
        table: (state.table = value),
    })),
    query: "",
    setQuery: (value:string) => set((state: {query:string}) => ({
        query: (state.query = value),
    }))
}));

export default useLocationDataStore;
export type {locationDataStore};