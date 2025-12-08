import { PropsWithChildren, ReactNode, useEffect } from "react";

import BoardFooter from "@/components/board/BoardFooter.tsx";
import BoardHeader from "@/components/board/BoardHeader.tsx";
import BoardContent from "@/components/board/BoardContent.tsx";
import Card from "@/components/board-card/Card.tsx";
import { cn } from "@/lib/cn.ts";
import CardForm from "@/components/card-item/CardForm.tsx";
import List from "@/components/card-item/List.tsx";
import ListItem from "@/components/card-item/ListItem.tsx";
import { Activity, Check, LucideListTodo } from "lucide-react";
import { useBoardStore } from "@/store/useBoardStore";

type BoardProps = PropsWithChildren<{
    className?: string;
}>;

export interface Item {
    id: string;
    content: ReactNode;
    parent: number | null;
    order: number;
}

const boardsItems: Item[] = [
    {
        id: "1",
        content: (
            <div className={"flex items-center gap-1"}>
                <LucideListTodo className={"-mt-1"} />
                Todo
            </div>
        ),
        parent: null,
        order: 0,
    },
    {
        id: "12",
        content: (
            <div className={"flex items-center gap-1"}>
                <LucideListTodo className={"-mt-1"} />
                Next
            </div>
        ),
        parent: null,
        order: 3,
    },
    {
        id: "2",
        content: (
            <div className={"flex items-center gap-1"}>
                <Activity className={"-mt-1"} />
                In Progress
            </div>
        ),
        parent: null,
        order: 1,
    },
    {
        id: "4",
        parent: 0,
        content:
            "Lorem ipsum dolor sit amet, consectetur 3 df sd dfk  adipisicing elit.",
        order: 0,
    },
    {
        id: "5",
        parent: 0,
        content:
            "child-> Lorem ipsum dolor sit amet, consectetur 3 df sd dfk  adipisicing elit.",
        order: 1,
    },
    {
        id: "6",
        parent: 1,
        content:
            "child-> Lorem ipsum dolor sit amet, consectetur 3 df sd dfk  adipisicing elit.",
        order: 0,
    },
    {
        id: "7",
        parent: 2,
        content:
            "child-> Lorem ipsum dolor sit amet, consectetur 3 df sd dfk  adipisicing elit.",
        order: 0,
    },
    {
        id: "8",
        parent: 1,
        content:
            "child-> Lorem ipsum dolor sit amet, consectetur 3 df sd dfk  adipisicing elit.",
        order: 1,
    },
    {
        id: "9",
        parent: 1,
        content:
            "Lorem ipsum dolor sit amet, consectetur 3 df sd dfk  adipisicing elit.",
        order: 2,
    },
    {
        id: "3",
        parent: null,
        content: (
            <div className={"flex items-center gap-1"}>
                <Check className={"-mt-1"} />
                Done
            </div>
        ),
        order: 2,
    },
];

const Board = ({ className }: BoardProps) => {
    const { boardItems, setBoardItems } = useBoardStore();

    useEffect(() => {
        setBoardItems(boardsItems);
    }, []);

    const cards = boardItems?.filter((x) => x.parent == null);
    const items = boardItems
        ?.filter((x) => x.parent != null)
        .sort((a, b) => a.order - b.order);

    return (
        <>
            <div className={cn("board grid items-end-safe", className)}>
                <BoardHeader />

                <BoardContent>
                    {cards?.map(
                        (card, idx) =>
                            card.parent == null && (
                                <Card index={idx} card={card} key={card.id}>
                                    <List>
                                        {items?.map(
                                            (item) =>
                                                item.parent == card.order && (
                                                    <ListItem
                                                        parentOrder={card.order}
                                                        dragOrder={item.order}
                                                        item={item}
                                                        key={item.id}
                                                    >
                                                        {item.content}
                                                    </ListItem>
                                                )
                                        )}
                                        <CardForm id={card.id} />
                                    </List>
                                </Card>
                            )
                    )}
                </BoardContent>

                <BoardFooter />
            </div>
        </>
    );
};

export { type BoardProps };

export default Board;
