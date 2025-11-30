import {Calendar, CornerDownLeft, Plus} from "lucide-react";
import {cn} from "@/lib/cn.ts";
import {useBoardStore} from "@/store/useBoardStore.ts";


type CardFormProps = {
    className?: string;
    id: string;
}

const CardForm = ({className, id}: CardFormProps) => {
    const {openFormId, setOpenFormId} = useBoardStore();

    const isOpen = openFormId === id;

    const handleToggleCreate = ()=> {
        setOpenFormId(isOpen ? null : id);
    }

    return (
        <li className={cn("shadow rounded px-3 pt-2 pb-1 bg-white/60 ", className)}>
            <button
                onClick={handleToggleCreate}
                className={"w-full h-10 text-gray-600 flex gap-2 items-center justify-center cursor-pointer"}>
                <span className={"mt-1"}>Create</span>
                <Plus/>
            </button>

            {isOpen && (
                <>
                    <textarea className={"p-2 border-none w-full h-20 resize-none focus:outline-none"}></textarea>
                    <div className={"text-gray-500 p-2 flex justify-between"}>
                        <Calendar/>

                        <CornerDownLeft className={"cursor-pointer"}/>
                    </div>
                </>
                )}
        </li>
    );
};

export default CardForm;