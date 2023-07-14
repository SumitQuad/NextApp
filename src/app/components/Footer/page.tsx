interface Props { }

function Page(props: Props) {
    const { } = props

    return (
        <>
            <button className="transition duration-150 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button A</button>
            <button className="transition duration-300 ease-in-out bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Button B</button>
            <button className="transition duration-700 ease-in-out bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Button C</button>

        </>
    )
}

export default Page
