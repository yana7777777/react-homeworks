interface ArticlePreviewProps {
    title: string;
    author: string;
    commentsCount: number;
    publishedAt: string;
}

function ArticlePreview({ title, author, commentsCount, publishedAt }: ArticlePreviewProps) {
    return (
        <div className="article-card">
            <h3>{title}</h3>
            <p>Автор: {author}</p>
            <p>{commentsCount} комментариев</p>
            <p>Дата публикации: {publishedAt}</p>
        </div>
    );
}

export default ArticlePreview;