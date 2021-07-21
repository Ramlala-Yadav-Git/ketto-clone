
export function BrowseSelection(params) {

    return (
        <div>
            <p>Showing fundraisers for</p>
            <select name="categories" >
                <option value="allCatogories">All Catogories</option>
                <option value="education">Education</option>
                <option value="medical">Mediacal</option>
            </select>
            <p>
                under
            </p>
            <select name="allTypes">
                <option value="allTypes">All Types</option>
                <option value="taxBenefit">Tax Benefit</option>
                <option value="trending">Trending</option>
            </select>
            <p>from</p>
            <select name="allLocations">
                <option value="allLocations">All Locations</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
            </select>
        </div>
    )
}