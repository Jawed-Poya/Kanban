import { create } from 'zustand';


type BoardStore = {
    openFormId: string | null;
    setOpenFormId: (openFormId: string | null) => void;
}

export const useBoardStore = create<BoardStore>((set) => ({
    openFormId: null,
    setOpenFormId: (id) => set({ openFormId: id }),
}));
