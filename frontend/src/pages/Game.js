import "../styles/game.css"
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import imagen from "../assets/gtav.jpg"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

export default function Game () {
    const [like, setlike] = useState(false)
    return (
        <>
            <div className="gamebg ">
                <div className="container">
                    <h1 className="gamePath">STORE/*Categoria*/*nombre del juego*</h1>
                    <div className="divgen">
                        <div >
                            <img className="avatar" src={imagen}/>
                        </div>
                        <div className="nameandlike">
                            <div className="gameinfo ">
                                 <h2 className="gametitle">*Nombre del Juego*</h2>
                                 <IconButton aria-label="add to favorites" className="fav" onClick={() => setlike(!like)}>
                                 {like? <FavoriteIcon className="favorite"/> : <FavoriteIcon className="favorite2"/>}
                                 </IconButton>
                        
                            </div> 
                            <div className="dev">
                                 <h3 >*Developer*</h3> 
                            </div> 
                    
                            <div className="release">
                                <h4 className="date">RELEASE DATE: *fecha*</h4>
                                <h4 className="date">REVIEWS: *rating*</h4>
                            </div>
                        </div>
                    </div>
                 </div>
                <div className="container screen">
                    <div className="e-card-ht">
                        <div className="e-card-image-1" > <img className="cardimg" src="https://as01.epimg.net/meristation/imagenes/2020/05/14/noticias/1589454136_132592_1590065418_noticia_normal.jpg"/> </div>         
                    </div>
                    <div className="e-card-ht">
                        <div className="e-card-image-1" > <img className="cardimg" src="https://as01.epimg.net/meristation/imagenes/2020/05/14/noticias/1589454136_132592_1590065418_noticia_normal.jpg"/> </div>         
                    </div>
                    <div className="e-card-ht">
                        <div className="e-card-image-1" > <img className="cardimg" src="https://as01.epimg.net/meristation/imagenes/2020/05/14/noticias/1589454136_132592_1590065418_noticia_normal.jpg"/> </div>         
                    </div>
                </div>
            </div>
            <div  className="container buttons-bottom">      
                <Stack direction="row" spacing={2}>
                     <Button className="btn-cat" variant="contained" disabled>
                         *categoria*
                     </Button>
                     <Button className="btn-cat" variant="contained" disabled>
                         *categoria2*
                     </Button>
                     <Button className="btn-cat" variant="contained" disabled>
                         *categoria3*
                     </Button>
                     <Button className="btn-cat" variant="contained" disabled>
                         *categoria4*
                     </Button>            
                </Stack> 
                <div className="div-btn-price">
                     <Button className="btn-price" variant="contained" disabled>
                         *precio*
                     </Button>
                </div>
            </div>
            <div className="container descriptions">
                <div className="text">
                    <h4 className="game-desc-title">GAME DESCRIPTION</h4>
                    <p className="game-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra congue metus, sed egestas mi. Suspendisse at enim ultrices, fringilla tortor eu, consequat arcu. Proin elementum libero sit amet eros pellentesque, a consequat leo suscipit. Maecenas vel condimentum ipsum. Nam a euismod risus. Nam eleifend pretium odio, eget consequat ex molestie id. Aenean convallis sed massa a interdum. Curabitur et tellus feugiat, mattis turpis ac, vulputate dui. Integer efficitur, sapien ac mattis fringilla, diam orci cursus est, eu lacinia eros mi vel turpis. Maecenas non lacinia ante, et elementum mauris. Cras non nisl feugiat felis imperdiet aliquam eu non est.
                    </p> 
                </div>
                <div className="div-table">
                    <table>
                        <thead>
                        <tr>
                            <th rowSpan={2}>Language</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr> <td>English</td> <td><DoneIcon className="icon-done"/></td></tr>
                        <tr> <td>German</td> <td><DoneIcon className="icon-done"/></td></tr>
                        <tr><td>Spanish</td> <td><CloseIcon className="icon-done"/></td></tr>
                        <tr><td>French</td> <td><CloseIcon className="icon-done"/></td></tr>
                        <tr><td>Russian</td> <td><DoneIcon className="icon-done"/></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container finalinfo">
                <div>
                    <h4 className="review-text">REVIEWS</h4> 
                
                    <div className="review"> 
                        <p className="p-review1">*Nombre de usuario</p>
                        <p className="p-review2">*rating*</p> 
                        <p className="p-review3">*"comment"*</p>
                    </div>   
                </div>
                <div className=" trailer">
                    <h4 className="game-desc-title">WATCH THE GAME TRAILER</h4>   
                    <div className="e-card-ht-trailer">
                         <div className="e-card-image-1" > <img className="card-trailer" src="https://as01.epimg.net/meristation/imagenes/2020/05/14/noticias/1589454136_132592_1590065418_noticia_normal.jpg"/> </div>         
                    </div>   
                </div>
            </div>
        </>
    )
}