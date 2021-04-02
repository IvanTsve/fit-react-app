function Modal({
    open, 
    children,
    onClose
}) {

if (!open) return null;

    return (
        <form className="modalForm">
            <label htmlFor="pictureUrl"><strong>EpictureUrl</strong></label>
            <input type="text" id="pictureUrl" placeholder="Enter picture url" name="pictureUrl" required />
            <label htmlFor="title"><strong>Title</strong></label>
            <input type="text" id="title" placeholder="Enter title" name="title" required />
            <label htmlFor="content"><strong>Content</strong></label>
            <textarea name="content" id="content" cols="50" rows="10" placeholder="Enter your post"></textarea>

            <button type="submit"><strong>Post</strong></button>
            <button type="Button" onClick={onClose}><strong>Close</strong></button>

        </form>
    )
}

export default Modal