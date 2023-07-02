type inputProps = {
    text: string
}

const floatiInput = ({ text }: inputProps) => {

    return (
        <>
            <input id="email" name="email" type="text" className="pl-4 rounded-xl peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-secondary-color" placeholder="example@gmail.com" />
            <label for="email" className="absolute left-12 -top-7 font-semibold text-gray-600 text-lg transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-t-main peer-focus:text-lg peer-focus:m-0 peer-focus:font-semibold">{text}</label>
        </>
    )
}

export default floatiInput;