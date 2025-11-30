import {PropsWithChildren} from "react";

import BoardFooter from "@/components/board/BoardFooter.tsx";
import BoardHeader from "@/components/board/BoardHeader.tsx";
import BoardContent from "@/components/board/BoardContent.tsx";
import Card from "@/components/board-card/Card.tsx";
import {cn} from "@/lib/cn.ts";
import CardForm from "@/components/card-item/CardForm.tsx";
import List from "@/components/card-item/List.tsx";
import ListItem from "@/components/card-item/ListItem.tsx";

type BoardProps = PropsWithChildren<{
    className?: string;
}>;


const Board = ({className}: BoardProps)=> {
    return (
        <>
            <div className={cn("board grid items-end-safe", className)}>
                <BoardHeader />

                <BoardContent>
                    <Card label={"Todo"}>
                        <List>
                            <ListItem>
                                Lorem ipsum dolor sit amet, consectetur 3 df sd dfk  adipisicing elit.
                            </ListItem>
                            <ListItem>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </ListItem>
                            <ListItem>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 333
                            </ListItem>
                            <CardForm id={"todo"} />
                        </List>
                    </Card>
                    <Card label={"Doing"}>
                              <List>
                        <ListItem>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </ListItem>

                            <CardForm id={"doing"} />
                              </List>
                    </Card>
                    <Card label={"Done"}>
                        <ul className={"flex flex-col gap-2"}>
                            <CardForm id={"done"} />
                        </ul>
                    </Card>
                </BoardContent>

                <BoardFooter />
            </div>
        </>
    );
}

export { type BoardProps };

export default Board;