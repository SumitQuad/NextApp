interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div className=" mt-10 ">
            <h6 className="mb-2">Fuel</h6>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            className="grab-cursor"
                            style={{ marginRight: "10px" }}
                        />
                       Petrol
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
                        CNG
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
                        Diesel
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
                        LPG
                    </label>
                    <br />
                </div>
        </div>
    )
}

export default Page
