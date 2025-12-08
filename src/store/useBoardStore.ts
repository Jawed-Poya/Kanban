import { Item } from "@/components/board/Board";
import { create } from "zustand";

type ActiveDrag = {
    dragItem?: Item;
    dragToParentOrder?: number;
    dragToOrder?: number;
};

type BoardStore = {
    openFormId: string | null;
    setOpenFormId: (openFormId: string | null) => void;
    activeDrag: ActiveDrag | null;
    setActiveDrag: (activeDrag: ActiveDrag | null) => void;

    boardItems: Item[] | undefined;
    setBoardItems: (boardItems: Item[] | undefined) => void;
};

export const useBoardStore = create<BoardStore>((set) => ({
    openFormId: null,
    setOpenFormId: (openFormId) => set({ openFormId }),
    activeDrag: null,
    setActiveDrag: (activeDrag) => set({ activeDrag }),

    boardItems: undefined,
    setBoardItems: (boardItems) => set({ boardItems }),
}));
