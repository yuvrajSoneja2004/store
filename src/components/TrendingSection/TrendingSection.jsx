import React from 'react'
import S from './TrendingSection.module.css';

function TrendingSection() {

    return (
        <div>
            {/* dynamic  code here  */}


            {/* Load more button  */}
            <div className={S.loadMoreBtn}>
                <button>load more</button>
            </div>

        </div>
    )
}

export default TrendingSection