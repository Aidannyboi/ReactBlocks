const SubContent = () => {
    return (
        <button onClick={() => alert("Moving to clicked game!")} className="subContent">
            <div>
                "These are sub contents!"
            </div>
        </button>
    )
}

export default SubContent;