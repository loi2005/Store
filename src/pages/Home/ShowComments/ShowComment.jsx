import Comment from "../../../components/UI/comment/Comment";
import { Comments } from "../../../services/api";
function ShowComment() {
  const { isComments, errorComments } = Comments();
  return (
    <div>
      <Comment commens={isComments} />
    </div>
  );
}

export default ShowComment;
