import {PropsWithChildren, ReactNode} from "react";

import BoardFooter from "@/components/board/BoardFooter.tsx";
import BoardHeader from "@/components/board/BoardHeader.tsx";
import BoardContent from "@/components/board/BoardContent.tsx";
import Card from "@/components/board-card/Card.tsx";
import {cn} from "@/lib/cn.ts";
import CardForm from "@/components/card-item/CardForm.tsx";
import List from "@/components/card-item/List.tsx";
import ListItem from "@/components/card-item/ListItem.tsx";
import {Activity, Check, LucideListTodo} from "lucide-react";

type BoardProps = PropsWithChildren<{
    className?: string;
}>;

export interface BaseItem {
    id: string;
    content: ReactNode;
}

export interface ListItem extends BaseItem {
    type?: "list-item";
}

export interface Card extends BaseItem {
    type?: "card";
    children: ListItem[];
}


const boardsItems: Card[] = [
    {
        id: "1",
        content: <div className={"flex items-center gap-1"}>
            <LucideListTodo className={"-mt-1"} />
            Todo
        </div>,
        children: [
            {
                id: "1",
                content: "Lorem ipsum dolor sit amet, consectetur 3 df sd dfk  adipisicing elit.",
            }
        ],
    },
    {
        id: "2",
        content: <div className={"flex items-center gap-1"}>
            <Activity className={"-mt-1"} />
            In Progress
        </div>,
        children: [
            {
                id: "1",
                content: "Lorem ipsum dolor sit amet, consectetur 3 df sd dfk  adipisicing elit.",
            },
            {
                id: "2",
                content: "Lorem ipsum dolor sit amet, consectetur 3 df sd dfk  adipisicing elit. What are doing?",
            },
            {
                id: "3",
                content: "Lorem ipsum dolor sit amet, consectetur 3 df sd dfk",
            }
        ],
    },
    {
        id: "3",
        content: <div className={"flex items-center gap-1"}>
            <Check className={"-mt-1"} />
            Done
        </div>,
        children: [
            {
                id: "1",
                content: "Lorem ipsum dolor sit amet, consectetur 3 df sd dfk  adipisicing elit.",
            },
            {
                id: "2",
                content: "Lorem ipsum dolor sit amet, consectetur 3 df sd dfk  adipisicing elit. What are doing?",
            },
            {
                id: "3",
                content: "Lorem ipsum dolor sit amet, consectetur 3 df sd dfk",
            },
            {
                id: "4",
                content: "Lorem ipsum dolor sit amet, consectetur 3 df sd dfk",
            }
        ],
    },
];

const Board = ({className}: BoardProps)=> {
    return (
        <>
            <div className={cn("board grid items-end-safe", className)}>
                <BoardHeader />

                <BoardContent>
                    {boardsItems.map((item) => (
                        <Card label={item.content} key={item.id}>
                            <List>
                                {item.children.map((i)=> (
                                    <ListItem key={i.id}>
                                        {i.content}
                                    </ListItem>
                                ))}
                                <CardForm id={item.id} />
                            </List>
                        </Card>
                    ))}
                </BoardContent>

                <BoardFooter />
            </div>
        </>
    );
}

export { type BoardProps };

export default Board;