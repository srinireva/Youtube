import "../Style/categories.css"
const Categories = () => {
    let Categories =[
        { link: "All"},
        { link: "Fashion"},
        { link: "Comedy"},
        { link: "Movies"},
        { link: "Tv"},
        { link: "Music"},
        { link: "Dance"},
        { link: "Vlogs"},
        { link: "Food"}
    ]
    return ( 
        <div className="categories">
            <ul> {
                Categories.map((data)=>{
                    return(
                        <li><a href="">{data.link}</a></li>
                    )
                })
                }

            </ul>
        </div>
     );
}
 
export default Categories;