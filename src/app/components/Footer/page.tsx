interface Props { }

function Page(props: Props) {
    const { } = props

    return (
        <>
            <footer className="bg-gray-900 text-white py-4 mt-20">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
                </div>
            </footer>

        </>
    )
}

export default Page
