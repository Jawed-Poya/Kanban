import { cn } from "@/lib/cn.ts";
import { BoardProps, Item } from "@/components/board/Board.tsx";
import { Edit } from "lucide-react";
import { useRef } from "react";
import { useBoardStore } from "@/store/useBoardStore";

type ListItemProps = BoardProps & {
    item: Item;
    dragOrder: number;
    parentOrder: number;
};

const ListItem = ({
    className,
    item,
    children,
    dragOrder,
    parentOrder,
}: ListItemProps) => {
    const listItem = useRef<HTMLLIElement | null>(null);
    const { activeDrag, setActiveDrag } = useBoardStore();

    return (
        <>
            <li
                onDragEnter={() => {
                    if (activeDrag?.dragItem?.parent != null) {
                        setActiveDrag({
                            ...activeDrag,
                            dragToOrder: dragOrder,
                            dragToParentOrder: parentOrder,
                        });
                    }
                }}
                onDragLeave={() => {
                    // if (
                    //     activeDrag?.dragItem.id === activeDrag?.dragToOrder &&
                    //     activeDrag?.dragItem.parent ===
                    //         activeDrag?.dragToParentOrder
                    // ) {
                    //     return;
                    // }
                }}
                className="border border-gray-500 rounded  min-h-[50px]"
            ></li>
            <li
                ref={listItem}
                data-id={item.id}
                draggable
                onDragStart={(e) => {
                    const listItem = e.target as HTMLLIElement;

                    if (listItem.dataset.id) {
                        setActiveDrag({
                            dragItem: item,
                            dragToOrder: undefined,
                            dragToParentOrder: undefined,
                        });
                    }
                }}
                onDragEnd={() => {
                    if (activeDrag?.dragItem?.parent == null) return;

                    setActiveDrag(null);
                }}
                className={cn(
                    "text-sm overflow-hidden hover:ps-6 transition-[padding] relative group shadow rounded px-3 pt-2 pb-1 bg-white/60 ",
                    className
                )}
            >
                <input
                    type={"radio"}
                    className={
                        "group-hover:-translate-x-[18px] absolute -translate-x-7 transition-transform"
                    }
                />

                {children}

                <button
                    className="
                    cursor-pointer
                    p-1
                    border border-gray-200
                    rounded-full
                    bg-white
                    absolute top-1 right-1
                    opacity-0 group-hover:opacity-100
                    transition-opacity
                "
                >
                    <Edit size={"16px"} />
                </button>
            </li>
        </>
    );
};

export default ListItem;
