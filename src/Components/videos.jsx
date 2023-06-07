import Video from "../Style/videos.css"
import { useState } from "react";
const Videos = () => {
    let [Video, setVideo] = useState([
        {
            id:1,
            thumbnail: "https://i.ytimg.com/vi/ux6v8v5GWmk/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLAOjKxbXeqUGdI75w-e9khoisrYXQ",
            title: "NeethoEeGadichinaKaalam Full Video Song | Phalana Abbayi Phalana Ammayi | Naga Shaurya | Malvika",
            channel:"Musiclover",
            views:"1M"
        },
        {
            id:2,
            thumbnail:"https://i.ytimg.com/vi/-J78QhWxAuk/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLD9dm8LZOi-CnWEcKFkyaNcR3WhbQ",
            title:"Haal-e-dil",
            channel:"Bollywood music",
            views:"1.5M"
        },
        {
            id:3,
            thumbnail:"	https://i.ytimg.com/vi/GTaSUaDZ8Bg/hq720.jpg?sqp=-…BACGAYgATgB&rs=AOn4CLBxDpW8fd6Zp9WqMAmpRxXSh864FA",
            title:"Pushpa 2 news",
            channel:"cine adda",
            views:"57K"
        },
        {
            id:4,
            thumbnail:"	https://i.ytimg.com/vi/3E3-I9tnvPg/hq720.jpg?sqp=-…BACGAYgATgB&rs=AOn4CLD2DdmVazu_jdjiwDBjePRDHlxj_Q",
            title:"Ravi Teja And Brahmanandam Ultimate Comedy Scene | Telugu Comedy Scenes |",
            channel:"𝗞𝗜𝗥𝗔𝗔𝗞 𝗩𝗜𝗗𝗘𝗢𝗦 ",
            views:"90K"
        },
        {
            id:5,
            thumbnail:"	https://i.ytimg.com/vi/m997dWNfYGE/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLA3fq9z6TowNVTfbC34oyEnu4iCLw",
            title:"Mahasamudram - Cheppake Cheppake Video | Sharwanand, Aditi Rao Hydari",
            channel:"Mixbook",
            views:"57K"
        },
        {
            id:6,
            thumbnail:"https://i.ytimg.com/vi/d__uQ6gAolQ/hq720.jpg?sqp=-…BACGAYgATgB&rs=AOn4CLBLUXFaZCEUzUkEL-eU0fBXvR_ukA",
            title:"sister books",
            channel:"niha sisters",
            views:"1.5M"
        },
        {
            id:7,
            thumbnail:"	https://i.ytimg.com/vi/CzpG5Xjq9OM/hq720.jpg?sqp=-…BACGAYgATgB&rs=AOn4CLBkdz8VSKHmhoOc3DVbOSUcs69FMg",
            title:"yeh rate yeh masum",
            channel:"hindi music",
            views:"2M"
        },
        {
            id:8,
            thumbnail:"	https://i.ytimg.com/vi/y6chhI49CwA/hq720.jpg?sqp=-…BACGAYgATgB&rs=AOn4CLBKJ_jD_RIDfq17ZDr_Vwiga2RWWQ",
            title:"odisha train",
            channel:"newst",
            views:"45K"
        },
        {
            id:9,
            thumbnail:"	https://i.ytimg.com/vi/kPdq_6OELaI/hq720.jpg?sqp=-…BACGAYgATgB&rs=AOn4CLCql7-OvSURKOnALuQMI2KeSXvfBQ",
            title:"trains odisha",
            channel:"update",
            views:"34K"
        },
        {
            id:10,
            thumbnail:"https://i.ytimg.com/vi/COZGV3vEQ4A/hq720.jpg?sqp=-…BACGAYgATgB&rs=AOn4CLDRwqeh-45thlBzluTUDKmSCFjwCw",
            title:"manasuna unnadi",
            channel:"ever green",
            views:"98K"
        },
        {
            id:11,
            thumbnail:"	https://i.ytimg.com/vi/2YlN30Uq0M0/hq720.jpg?sqp=-…BACGAYgATgB&rs=AOn4CLD96q1Iy1yBPcz3zliiPsU6Gn1-mg",
            title:"SSC portal",
            channel:"potal info",
            views:"34K"
        },
        {
            id:12,  
            thumbnail:"	https://i.ytimg.com/vi/_aT_CHvETow/hqdefault.jpg?s…BACGAYgATgB&rs=AOn4CLA-dmpQHB-gqS3q93jlyYLEwErAMg",
            title:"summa adda santhosh",
            channel:"Etv telugu",
            views:"89K"
        }

    ])
    let [shorts,setshorts] = useState([
        {
            thumbnail:"	https://i.ytimg.com/vi/QezD39oKpB8/hq720_2.jpg?sqp…hgGIAE4AQ==&rs=AOn4CLDPi71VDN6r2HEczul92xWRR6LeUQ",
            title:"unplanned",
            channel:"comedy",
            views:"35k"
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/lwnqWUOE0ls/oar2.jpg",
            title:"dance ",
            channel:"dance",
            views:"15K"
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/dh_tim4PZO0/oar2.jpg?sqp=-o…hgGIAE4AQ==&rs=AOn4CLCwoH-bP2yXalrDyoUoXsnDRfJPjg",
            title:"telugu",
            channel:"reels",
            views:"12K"
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/N9hofWd_QbA/oar2.jpg?sqp=-o…hgGIAE4AQ==&rs=AOn4CLC4uJaJy6rzB4Yrp8185WpQAfzq1Q",
            title:"urike urike",
            channel:"teleugu volgs",
            views:"49K"
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/FbqiWoeowfg/oar2.jpg?sqp=-o…hgGIAE4AQ==&rs=AOn4CLCuagN-Z19byavsWvQFiZevahgimA",
            title:"anupama",
            channel:"telugu pilla",
            views:"64K"
        },
        {
            thumbnail:"	https://i.ytimg.com/vi/W_OpAbofVeU/hq720_2.jpg?sqp…hgGIAE4AQ==&rs=AOn4CLA_BxRK-xWEV-H3HColTvd7IncaDg",
            title:"sr Kalyana mantapam",
            channel:"Kiram fans",
            views:"65K"
        }
    ])
    let removeVideo=(id,channel)=>{
        let result=Video.filter( (x)=>x.id !==id )
        setVideo(result)
        alert(`${channel} got deleted`)
    }
    return (  
      <div className="vsh">
          <div className="vidoes">
            <h1>Featured videos</h1>
            <div className="videoData">
                {
                    Video.map((data)=>{
                        return(
                            <div className="vide">
                                <img src={data.thumbnail} alt="" />
                                <div className="videdeatils">
                                    <h3>{data.title}</h3>
                                    <p>{data.channel}</p>
                                    <p>{data.views}</p>
                                    <a onClick={()=>removeVideo(data.id,data.channel)}>Remove</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="shorts">
            <h1>Shorts</h1>
            <div className="shortData">
                {
                    shorts.map((data1)=>{
                        return(
                            <div className="short">
                                <img src={data1.thumbnail} alt="" />
                                <div className="shortdeatils">
                                    <h3>{data1.title}</h3>
                                    <p>{data1.channel}</p>
                                    <p>{data1.views}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    );
}

export default Videos;