import { Avatar, Rating } from "@mui/material";

const CommentCard = ()=>{

    return (
        <div className="comment-card m-4 p-6 rounded-md cursor-pointer ">
                   
        <div className="header-area mb-4 flex flex-row justify-between">
            <div className="avatar area flex gap-3  justify-center flex-row">
          <Avatar >A</Avatar>

        
        <div>
            <p className="font-roboto text-sm">Author</p>
            <p className="font-roboto text-xs font-light">DD/MM/YY</p>
        </div>
            </div>
            <Rating sx={
        {
            marginBottom: "1.25rem",
            color: "#2181F8"
        }
    } name="size-medium" value={5} onChange={null} onClick={null} />
        </div>

        <div className="text-[#737373] font-roboto text-justify ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</div>

    </div>
    )

}


export default CommentCard;