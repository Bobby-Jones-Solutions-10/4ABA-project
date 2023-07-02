
type containerWeekDayProps = {
    tittle: string,
    tasks: React.ReactNode,

}

const ContainerWeekDay = ({tittle, tasks}: containerWeekDayProps) => {

    return (
        <>
            <div className="container flex flex-col p-4 m-4 bg-white w-56 rounded-xl items-center shadow-xl shadow-zinc-500">
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

export default ContainerWeekDay;