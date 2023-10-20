import "./Feed.css" 
import Share from "../Share/Share"
import Post from "../Post/Post"
import {Posts} from '../../DummyData'

export default function feed() {
  return (
    <div className="feed">
      <div className="feedWrapper"></div>
      <Share/>
      {
      Posts.map(
        (p) =>
       (
        <Post key={p.id} post = {p} />
        )
      )
      }
    </div>
  )
}
