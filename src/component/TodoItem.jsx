import "./TodoItem.css";

const TodoItem = ({ id, content, createDate,isDone,onUpdate,onDelete }) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    };
    const onClickDelete = () => {
        onDelete(id);
    };
    
    return(
        <div className='TodoItem'>
            <div className='checkbox_col'>
                <input onChange={onChangeCheckbox} checked={isDone} type='checkbox' />
            </div>
            <div className='title_col'>{content}</div>
            <div className='date_col'>
                {new Date(createDate).toLocaleDateString()}
            </div>
            <div className='btn_col'></div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    );

};

export default TodoItem;