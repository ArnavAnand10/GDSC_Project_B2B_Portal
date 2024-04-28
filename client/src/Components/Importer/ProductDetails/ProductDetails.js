import { Button, ButtonGroup, Rating } from "@mui/material";
import productImg from "../../../Assets/Images/lcd.png"
import Avatar from '@mui/material/Avatar';
import CommentCard from "./CommentCard";
import EditNoteIcon from '@mui/icons-material/EditNote';

const ProductDetails = () => {


    const sideDescription = ["α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling", "α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling", "α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling", "α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling "]


    return <div className="product-detailsc h-full w-screen p-5 bg-[#FAFAFA]">
        {/* product image and  descriptionm area */}
        <div className="hero-section flex flex-row">

            {/* image section */}
            <div className="basis-1/2 flex flex-row p-10 gap-10 ">
                <div className="basis-1/4 p-10 flex flex-col gap-4 justify-between ">

                    <div className="w-full border-2 p-3  h-25 shadow-sm rounded-md  ">
                        <img className="" src={productImg} alt="" srcset="" />
                    </div>


                    <div className="w-full border-2 p-3  h-25 shadow-sm rounded-md  ">
                        <img className="" src={productImg} alt="" srcset="" />
                    </div>

                    <div className="w-full border-2 p-3  h-25 shadow-sm rounded-sm ">
                        <img className="" src={productImg} alt="" srcset="" />
                    </div>

                </div>
                {/* image area */}
                <div className="basis-3/4 bg-[#DCE5EF] border-2 rounded-md border-[#B5B5B5] flex flex-row justify-center items-center">

                    <img className="w-80 h-80" src={productImg} alt="" srcset="" />

                </div>
            </div>

            {/* side description section */}

            <div className="basis-1/2  p-10">
                <h1 className="font-poppins text-2xl font-medium mb-2"> LG C2 42 (106cm) 4K Smart OLED evo TV <br />
                    | WebOS | Cinema HDR </h1>

                <Rating sx={
                    {
                        marginBottom: "1.25rem",
                        color: "#2181F8"
                    }
                } name="size-medium" value={5} onChange={null} onClick={null} />
                <div className="flex flex-col gap-2 mb-5">
                    {sideDescription.map(content => <ul className="font-roboto font-light text-sm" key={Math.random}>{content}</ul>)}
                </div>
                {/* price */}
                <h2 className="font-poppins text-xl text-[#2181F8] font-semibold">$600.72 /- <span className="font-poppins font-light text-sm">$800.00</span></h2>

                <div className="buttons-area my-5 flex pr-10 py-3 flex-row gap-5">

                    <ButtonGroup disableElevation variant="contained" aria-label="Basic button group">
                        <Button ele variant="outlined" disableElevation color="info">-</Button>
                        <Button disableElevation> 1</Button>
                        <Button variant="outlined" disableElevation color="info">+</Button>
                    </ButtonGroup>


                    <Button disableElevation sx={{
                        padding: "10px 35px",
                    }} variant="contained">Buy Now</Button>
                    <Button disableElevation sx={{
                        padding: "10px 35px",
                    }} variant="outlined">Enquiry</Button>
                </div>

            </div>
        </div>

        {/* description */}

        <div className="p-5">

            <div className="flex flex-row justify-center gap-4">
                <h1 className="text-xl font-bold font-poppins">Description</h1>
                <h1 className="text-xl font-poppins">Specifications</h1>
            </div>



            <hr className="mt-2" />

            <p className="px-48 m-5">
                The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. <br /> Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers.
                <br />
                Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging. <br />
                65C2 Stand model is at a minimum 39% lighter than the C1 series. <br />
                The 'Reducing CO2' footprint label applies to 65C2 only. All other C2 models feature a 'CO2 Measured' label. <br />
                UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size. <br />


            </p>
        </div>
        {/* comments section */}
        <div className="mt-10 p-5 comments-section">

            <div className="mb-3 flex flex-row justify-center gap-4 bg-[#FAFAFA]">
                <h1 className="text-xl  m-0 p-0 font-medium font-poppins">What Others Have To Say About This!</h1>

            </div>
            <hr className="mt-2" />

            <div className="comments-area flex p-5 flex-row">
                <div className="basis-1/4 p-5 flex flex-col justify-start ">

                    <h1 className="font-poppins font-medium text-xl">Customer Reviews</h1>

                    {/* average reviews  */}
                    <div className="flex flex-row gap-2 justify-start items-center mt-2">
                        <p className="font-medium">4.0</p>
                        <Rating sx={
                            {
                                color: "#2181F8"
                            }
                        } size="small" value={5} onChange={null} onClick={null} />
                        <p>(1920 reviews)</p>
                    </div>

                    {/* reviews component area */}
                    <div className="flex flex-col mt-3 gap-2">
                        {/* reviwes component */}

                        <div className="flex flex-row items-center gap-2">
                            <h1 className="font-bold">5</h1>
                            <div className="w-full bg-gray-200 h-2 flex flex-row rounded-full dark:bg-gray-100">

                                <div
                                    className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full`}
                                    style={{ width: `${80}%` }}
                                ></div>

                            </div>
                            <h1>{`${80}%`}</h1>
                        </div>

                        <div className="flex flex-row items-center gap-2">
                            <h1 className="font-bold">4</h1>
                            <div className="w-full bg-gray-200 h-2 flex flex-row rounded-full dark:bg-gray-100">

                                <div
                                    className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full`}
                                    style={{ width: `${50}%` }}
                                ></div>

                            </div>
                            <h1>{`${50}%`}</h1>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <h1 className="font-bold">3</h1>
                            <div className="w-full bg-gray-200 h-2 flex flex-row rounded-full dark:bg-gray-100">

                                <div
                                    className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full`}
                                    style={{ width: `${10}%` }}
                                ></div>

                            </div>
                            <h1>{`${10}%`}</h1>
                        </div>

                        <div className="flex flex-row items-center gap-2">
                            <h1 className="font-bold">2</h1>
                            <div className="w-full bg-gray-200 h-2 flex flex-row rounded-full dark:bg-gray-100">

                                <div
                                    className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full`}
                                    style={{ width: `${4}%` }}
                                ></div>

                            </div>
                            <h1>{`${4}%`}</h1>
                        </div>

                        <div className="flex flex-row items-center gap-2">
                            <h1 className="font-bold">1</h1>
                            <div className="w-full bg-gray-200 h-2 flex flex-row rounded-full dark:bg-gray-100">

                                <div
                                    className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full`}
                                    style={{ width: `${2}%` }}
                                ></div>

                            </div>
                            <h1>{`${2}%`}</h1>
                        </div>

                    </div>


                    <hr className="mt-5" />

                    <div className="mt-5 flex flex-col gap-3">
                        <h1 className=" font-poppins text-xl font-medium">Share Your Review</h1>
                        <p className="text-[#737373] font-roboto">Lorem, ipsum dolor sit amet consec ispum genre tuhng</p>
                        <Button startIcon={<EditNoteIcon/>} variant="outlined">Write Your Review</Button>
                    </div>
                </div>
                {/* comments card area */}
                <div className="basis-3/4  ">


                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />








                </div>
            </div>

        </div>
    </div>
}

export default ProductDetails;