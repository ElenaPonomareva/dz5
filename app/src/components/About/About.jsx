import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  return (
    <>
      <p>
        Проект MyGram создан для людей, которые любят делится фотографиями и
        видео
      </p>
      <button
        type="button"
        onClick={() => {
          navigate(1)
        }}
        className="btn btn-success"
      >
        Return future
      </button>
    </>
  )
}

export default About
