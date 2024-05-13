import { CardList, Menu } from "@/components";


export default function page() {
    return (
        <div >
            <div className="bg-[#A5DD9B] w-full font-bold text-xl rounded-md text-center px-4 py-2">Style Blog</div>
            <div className="flex flex-col md:flex-row md:justify-between">
                <CardList />
                <Menu />
            </div>
        </div>
    )
}
