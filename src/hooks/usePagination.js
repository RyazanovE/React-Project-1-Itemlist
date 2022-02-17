import { useMemo, useState } from "react"

export const usePagination = (totalCount) => {
    const [page, setPage] = useState(1);
    

    const countArray = useMemo(() => {
        const countArray = []
        for (let i = 0; i < totalCount; i++) {
            countArray.push(i + 1)
        }
        return countArray
      }, [totalCount])

      return [page, setPage, countArray]
}