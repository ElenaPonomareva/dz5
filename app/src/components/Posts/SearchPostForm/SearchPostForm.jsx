import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePostsContext } from '../Posts'

// let isMount = false

const SearchPostForm = () => {
  const [searchInput, setSearchInput] = useState('')
  const isMount = useRef(false)
  const { updatePosts } = usePostsContext()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (isMount.current) {
      const filter = {
        search: searchInput,
      }

      const prepareFilterForURL = encodeURIComponent(JSON.stringify(filter))

      const query = `filter=${prepareFilterForURL}`

      setSearchParams(query)

      fetch(`http://localhost:3000/api/v1/posts/?${query}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          updatePosts(data)
        })
    } else {
      isMount.current = true

      const parsedQuery = JSON.parse(searchParams.get('filter'))

      if (parsedQuery && parsedQuery.search) {
        setSearchInput(parsedQuery.search)
      }
    }
  }, [searchInput])

  const changeHandler = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <form className="d-flex flex-column align-items-center">
      <div className="mb-3">
        <input
          type="text"
          name="title"
          placeholder="Поиск"
          className="form-control"
          id="exampleInputEmail1"
          onChange={changeHandler}
          value={searchInput}
        />
      </div>
    </form>
  )
}

export default SearchPostForm
