const MessageCard = ({content, username, createdAt}) => {
    return (
        <div className="message-card">
            <div className="message-content">
                {content}
            </div>
            <div className="message-meta">
                <span className="message-author">@{username}</span>
                <span className="message-time">{createdAt}</span>
            </div>
            <div className="message-actions"></div>
        </div>
    )
}

export default MessageCard