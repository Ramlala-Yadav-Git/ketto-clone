

export function BrowseSectionLeft({ CategoryName, HandleCategory }) {


    return (
        <>

            <div>
                <div>
                    <p onClick={(e) => HandleCategory(e)}>{CategoryName} </p>
                </div>
            </div>
        </>
    )
}