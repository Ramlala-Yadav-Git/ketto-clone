
export function BrowseSelection({ HandleChange }) {

    return (
        <div>
            <p>Showing fundraisers for</p>
            <select name="category" onChange={(e) => HandleChange(e)}>
                <option value="allCatogories">All Catogories</option>
                <option value="education">Education</option>
                <option value="medical">Medical</option>
            </select>
            <p>
                under
            </p>
            <select name="type" onChange={(e) => HandleChange(e)}>
                <option value="allTypes">All Types</option>
                <option value="taxBenefit">Tax Benefit</option>
                <option value="trending">Trending</option>
            </select>
            <p>from</p>
            <select name="location" onChange={(e) => HandleChange(e)}>
                <option value="alllocations">All Location</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="banglore">Bengaluru</option>
                <option value="pune">Pune</option>
            </select>
        </div>
    )
}