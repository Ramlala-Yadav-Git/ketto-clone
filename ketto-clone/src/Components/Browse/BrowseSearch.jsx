

export function BrowseSearch({ HandleSearchChange }) {


    return (
        <>
            <div>
                <input type="text" name="query" placeholder="Search for fundraisers by category type or city" onKeyDownCapture={(event) => HandleSearchChange(event)} />
            </div>
        </>
    )

}