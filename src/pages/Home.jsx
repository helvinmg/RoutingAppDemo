import welcome from '../assets/welcome.jpg'
function Home()
{
    return(
        <>
        <h1>Welcome to Movie Reviews</h1>
        <img width="500px" src={welcome}/>
        <p style={{backgroundColor:"lightblue"}}>dummy content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque corporis exercitationem asperiores dicta. Suscipit fugit necessitatibus, possimus consectetur numquam eos unde expedita perspiciatis explicabo cupiditate sunt sapiente atque repudiandae eveniet!</p>
        </>
    )
}
export default Home