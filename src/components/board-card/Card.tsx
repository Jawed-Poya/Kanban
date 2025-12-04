import { MoreVertical } from "lucide-react";
import { type PropsWithChildren, ReactNode } from "react";

type CardProps = PropsWithChildren<{
    label: ReactNode;
}>;

const Card = ({ label, children }: CardProps) => {
    return (
        <div
            draggable
            className={
                "p-4 bg-white/10 border border-gray-200 rounded-lg shadow"
            }
        >
            <div className={"card-header flex justify-between "}>
                <h3 className={"text-lg font-medium"}>{label}</h3>
                <MoreVertical className={"cursor-pointer"} />
            </div>

            <div className={"card-body min-h-[90%] mt-4"}>{children}</div>
        </div>
    );
};

export default Card;
