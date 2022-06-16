import React from 'react'
import { Button, Input, Space, Card } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../redux/features/postSlice'
import LoadingCard from './LoadingCard'

function CreatePost() {
  const [values, setValues] = useState({ title: "", body: "" })
  const [showPost, setShowPost] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { post, loading } = useSelector((state) => ({ ...state.app }))
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ values }));
    setValues({ title: '', body: '' })
    setShowPost(true)
  }
  const ShowPostBlog = () => {
    return (
      <>
        {loading ? <LoadingCard count={1} /> : (
          <>
            <div className='site-card-boder-less-wrapper'>
              <Card type='inner' title={post[0].title}>
                <p>User ID : {post[0].id}</p>
                <span>{post[0].body}</span>
              </Card>
            </div>
          </>
        )}
      </>
    )
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>CreatePost</h1>
        <Input
          type="text"
          placeholder='Enter Post Title'
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          value={values.title}
          style={{ width: "300px" }}
        />
        <br />
        <br />
        <Input.TextArea
          placeholder='Enter Body'
          type='text'
          size='large'
          style={{ width: "300px" }}
          value={values.body}
          onChange={e => setValues({ ...values, body: e.target.value })}
        />
        <br />
        <br />
        <Space style={{ margin: 10 }}>
          <Button type='primary' onClick={() => navigate('/')}>
            Go Back
          </Button>
          <Button type='primary' htmlType='submit' >
            Submit
          </Button>
        </Space>
      </form>
      <br />
      <br />
      {showPost ? <ShowPostBlog/>:null}

    </div>
  )
}

export default CreatePost