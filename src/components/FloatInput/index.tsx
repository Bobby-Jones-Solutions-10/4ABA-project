
type inputProps = {
    typeInput: string,
    name: string,
    id: string,
    placeHolder: string
}

const floatInput = ({ typeInput, name, id, placeHolder }: inputProps) => {

    return (
        <>
            <input id={id} name={name} type={typeInput} className="pl-4 rounded-xl peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-secondary-color" />
            <label htmlFor={id} className="cursor-text absolute left-12 top-1 bottom-0 font-normal text-gray-600 text-lg transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-t-main peer-focus:text-lg peer-focus:m-0 peer-focus:font-semibold">{placeHolder}
            </label>
        </>
    )
}

export default floatInput;