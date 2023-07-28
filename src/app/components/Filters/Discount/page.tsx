interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div className=" mt-10 ">
            <h6 className="mb-2">Discount</h6>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            className="grab-cursor"
                            style={{ marginRight: "10px" }}
                        />
                        50 % or more
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
                        40 % or more
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
                        30 % or more
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
                        20 % or more
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
                        10 % or more
                    </label>
                    <br />
                </div>
        </div>
    )
}

export default Page
