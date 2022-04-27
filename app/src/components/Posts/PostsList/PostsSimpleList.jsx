import PostsItem from '../PostsItem/PostsItem'
import PostsList from './PostsList'

const PostsSimpleList = () => (
  <PostsList>
    {({ posts }) => {
      console.log(posts)
      const reversePosts = [...posts].reverse()
      console.log(reversePosts)
      return reversePosts.map((post) => <PostsItem {...post} key={post.id} />)
    }}

  </PostsList>
)

export default PostsSimpleList
