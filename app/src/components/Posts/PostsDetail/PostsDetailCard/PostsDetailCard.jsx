import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { usePostsDetailContext } from '../PostsDetail'

const cardVariants = {
  start: {
    opacity: 0,
    y: 100,
    rotate: 0,
  },
  end: {
    opacity: 1,
    y: 0,
    rotate: 360,
    transition: {
      duration: 2,
      rotate: {
        duration: 5,
      },
    },
  },
}

const PostsDetailCard = () => {
  const navigate = useNavigate()

  const { post, openModal } = usePostsDetailContext()

  return (
    <motion.div variants={cardVariants} initial="start" animate="end" className="card" style={{ width: '18rem' }}>
      <img src={post.photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.post}</p>
        <p className="card-text">{post.tag}</p>
        <button type="button" onClick={() => navigate(-1)} className="btn btn-primary mx-1">Назад</button>
        <button type="button" onClick={openModal} className="btn btn-success mx-1">Редактировать</button>
      </div>
    </motion.div>
  )
}

export default PostsDetailCard
