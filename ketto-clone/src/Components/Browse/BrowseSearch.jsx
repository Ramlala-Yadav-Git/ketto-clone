

export function BrowseSearch({ HandleSearchChange }) {


    return (
        <>
            <div>
                <input type="text" name="query" placeholder="Search for fundraisers" onKeyDownCapture={(event) => HandleSearchChange(event)} />
            </div>
        </>
    )

}