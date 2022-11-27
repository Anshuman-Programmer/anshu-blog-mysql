import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import "./styles/_single.scss"
import DOMPurify from "dompurify";
import { AuthContext } from '../context/AuthContext';

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          {post.userImg && <img
            src={post.userImg}
            alt=""
          />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={"https://i.pinimg.com/originals/71/fc/47/71fc472790aa43f44555d08f4d4904c2.jpg"} alt="" />
              </Link>
              <img onClick={handleDelete} src={"https://i.pinimg.com/originals/71/fc/47/71fc472790aa43f44555d08f4d4904c2.jpg"} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>      </div>
      {/* <Menu cat={post.cat} /> */}
    </div>
  );
}

export default Single