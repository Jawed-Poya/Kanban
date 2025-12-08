import { MoreVertical } from "lucide-react";
import { type PropsWithChildren } from "react";
import { Item as CardType, Item } from "../board/Board";
import { useBoardStore } from "@/store/useBoardStore";
import { cn } from "@/lib/cn";

type CardProps = PropsWithChildren<{
    card: CardType;
    index: number;
}>;

type DropAreaProps = {
    onDragEnter: () => void;
    onDragLeave?: () => void;
};

const DropArea = ({ onDragEnter, onDragLeave }: DropAreaProps) => {
    const activeDrag = useBoardStore((state) => state.activeDrag);
    return (
        <div
            onDragEnter={(e) => {
                const element = e.target as HTMLDivElement;

                if (activeDrag?.dragItem?.parent) {
                    element.classList.add("drag-hover");
                }

                onDragEnter();
            }}
            onDragLeave={(e) => {
                const element = e.target as HTMLDivElement;
                element.classList.remove("drag-hover");

                if (onDragLeave) onDragLeave();
            }}
            className={cn("p-2 h-full")}
        ></div>
    );
};

const Card = ({ card, index, children }: CardProps) => {
    const { setActiveDrag, activeDrag, boardItems, setBoardItems } =
        useBoardStore();

    return (
        <>
            <DropArea
                onDragEnter={() => {
                    setActiveDrag({
                        dragItem: activeDrag?.dragItem,
                        dragToOrder: index,
                    });
                }}
                onDragLeave={() => {
                    console.log("Drag Leave!!!");
                }}
            />
            <div
                data-card={card.id}
                draggable
                onDragStart={(e) => {
                    const cardElement = e.target as HTMLDivElement;
                    if (cardElement.dataset.card) {
                        setActiveDrag({
                            dragItem: card,
                        });
                    }
                }}
                onDragEnd={() => {
                    if (activeDrag?.dragItem?.parent != null) return;

                    if (!boardItems) return;

                    // let newItems = boardItems.map((i) => {
                    //     if (i.id === activeDrag?.dragItem.id) {
                    //         return {
                    //             ...i,
                    //             order: activeDrag?.dragToOrder ?? i.order,
                    //             parent: i.parent,
                    //         } as Item;
                    //     }
                    //     return i;
                    // });

                    if (activeDrag?.dragItem?.parent == null) {
                        if (
                            activeDrag?.dragToParentOrder == undefined ||
                            activeDrag?.dragItem?.parent == undefined
                        )
                            return;

                        // boardItems[activeDrag?.dragToParentOrder] =
                        //     boardItems[activeDrag?.dragItem?.parent];
                    }

                    const newItems = boardItems.map((item) => {
                        if (item.id == activeDrag?.dragItem?.id) {
                            return {
                                ...item,
                                order: activeDrag?.dragToOrder,
                            } as Item;
                        }
                        return item;
                    });

                    console.log(newItems);

                    // newItems = newItems.sort((a, b) => {
                    //     return a.order - b.order;
                    // });

                    // setBoardItems(newItems);
                }}
                className={
                    "p-4 bg-white/10 border border-gray-200 rounded-lg shadow"
                }
            >
                <div className={"card-header flex justify-between "}>
                    <h3 className={"text-lg font-medium"}>{card.content}</h3>
                    <MoreVertical className={"cursor-pointer"} />
                </div>

                <div className={"card-body min-h-[90%] mt-4"}>{children}</div>
            </div>
        </>
    );
};

export default Card;
