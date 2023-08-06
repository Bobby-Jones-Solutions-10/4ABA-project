

const CardWeekDay = ({ tittle, tasks }: CardTasks) => {

    return (
        <>
            <div className="container flex flex-col p-4 m-4 bg-white w-56 rounded-xl items-center border-2 shadow-xl shadow-zinc-500">
                <div className="p-2 font-semibold text-t-main text-xl">
                    <h1>{tittle}</h1>
                </div>
                <div className="p-2">
                    {tasks}
                </div>
            </div>
        </>
    )
}

export default CardWeekDay;
