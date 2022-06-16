import React, { useState } from 'react'
import { Button, Input, Space, Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import { deletePost, getPost } from '../redux/features/postSlice'
import { useDispatch, useSelector } from 'react-redux'
import LoadingCard from './LoadingCard'
function Home() {
    const { loading, post } = useSelector((state) => ({ ...state.app }))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [id, setId] = useState()
    const fetchUserPost = () => {
        if (!id) {
            window.alert("Please Provide an ID")
        } else {
            dispatch(getPost({ id }))
            setId("")
        }
    }
    return (
        <div className='container'>
            <h1 style={{ textAlign: "center" }}>Fetch Post</h1>
            <Input placeholder='Enter User ID' type="number" onChange={(e) => setId(e.target.value)} value={id} style={{ width: '300px' }} />
            <br />
            <br />
            <Space size="small">
                <Button type='primary' onClick={fetchUserPost}>Fetch User Post</Button>
                <Button type='primary' onClick={() => navigate('/createPost')}>Create User Post</Button>
            </Space>
            <br />
            <br />
            <>
                {loading ? <LoadingCard count={1} /> : (
                    <>
                        {post.length > 0 && (
                            <div className='site-card-boder-less-wrapper'>
                                <Card type='inner' title={post[0].title}>
                                    <p>User ID : {post[0].id}</p>
                                    <span>{post[0].body}</span>
                                </Card>
                                <Space
                                size='middle'
                                style={{marginTop:35, marginLeft:5, float:'right'}}
                                >
                                    <Button type='primary' danger onClick={()=> dispatch(deletePost({id:post[0].id}))}>
                                        Delete
                                    </Button>
                                    <Button type='primary'>
                                        Edit
                                    </Button>
                                </Space>
                            </div>
                        )}
                    </>
                )}
            </>
        </div>
    )
}

export default Home