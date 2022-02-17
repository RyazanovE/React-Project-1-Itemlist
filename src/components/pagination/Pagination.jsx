import React from "react"

 const Pagination = ({pagesArray, changePage}) => {
    return(
            <div className="btn-group me-2"  role="group" aria-label="Second group" style={{ justifyContent: "center"}}>
                {pagesArray.map((page) => {
                  return(<button onClick={() => {changePage(page)}} key={page} className="btn btn-outline-secondary">{page}</button>)
                })}
            </div>

    )
}

export default Pagination