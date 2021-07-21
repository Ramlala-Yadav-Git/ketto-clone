import styles from "../Browse/Browse.module.css"
import { BrowseHeader } from '../Browse/BrowseHeader'
import { BrowseSectionLeft } from '../Browse/BrowsSectionLeft'
import { BrowseSearch } from '../Browse/BrowseSearch'
import { BrowseSelection } from '../Browse/BrowseSelection'
export function Browse(params) {



    return (
        <>
            <div className={styles.Browse}>


                <div className={styles.BrowseHeader}>
                    <BrowseHeader />
                </div>
                <div className={styles.BrowseSection}>

                    <div className={styles.BrowseSectionLeft}>
                        <div>
                            <h2>CATEGORIES</h2>
                        </div>
                        <hr />
                        <BrowseSectionLeft CategoryName={"All Categories"} />
                        <BrowseSectionLeft CategoryName={"Education"} />
                        <BrowseSectionLeft CategoryName={"Medical"} />
                        <BrowseSectionLeft CategoryName={"Women & Girls"} />
                        <BrowseSectionLeft CategoryName={"Animals"} />
                        <hr />
                        <button>Start a Fundraiser</button>
                    </div>
                    <div className={styles.BrowseSectionRight}>
                        <div className={styles.BrowseSearch}>
                            <BrowseSearch />
                        </div>
                        <div className={styles.BrowseSelection}>
                            <BrowseSelection />

                        </div>

                        <div className={styles.BrowseShowItems}>
                            <button>Reset Filters</button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}