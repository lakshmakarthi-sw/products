import { Link } from "react-router";

const MessagePage = (props) => {
  const { content, redirectTo } = props;

  return (
    <div className="message-page">
      <p>{content}</p>
      {redirectTo && <Link to={redirectTo}>Back to Dashboard</Link>}
    </div>
  );
}

export default MessagePage;