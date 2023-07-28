interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div className=" mt-10 ">
            <h6 className="mb-2">Offers</h6>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            className="grab-cursor"
                            style={{ marginRight: "10px" }}
                        />
                        No Cost EMI
                    </label>
                    <br />
                </div>

                <div>
                    <label>
                        <input
                            type="checkbox"
                            className="grab-cursor"
                            style={{ marginRight: "10px" }}
                        />
                        Special Price
                    </label>
                    <br />
                </div>
        </div>
    )
}

export default Page
