


const ExporterCard = ({props})=>{
    
    return (
        <div className=" flex flex-row gap-10 px-8 py-5  bg-white rounded-md card-shadow">
                <div className="flex flex-col gap-5 !justify-start items-start">
                    <h1 className="font-poppins">{props.title}</h1>
                    <h1 className="text-4xl font-semibold font-poppins">{props.value}</h1>
                </div>


                <div className="flex flex-col !items-end ml-auto">
                    {/* icons */}

                {props.icon}
                </div>
            </div>
    )
}

export default ExporterCard;