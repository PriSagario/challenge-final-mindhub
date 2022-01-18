import React, { useState, useEffect, useRef } from "react";
import CardGames from "../components/CardGamesPrecio";
import logo from "../assets/logo.png";
import ListIcon from "@mui/icons-material/List";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import { getAllGames, searchGame, getGameByGenre } from "../helpers/querys";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import {connect, useSelector} from "react-redux";

const genders = [
<<<<<<< HEAD
<<<<<<< HEAD
    "All Genders",
=======
    'All',
>>>>>>> 32d8460343d0829e659d8e197343412e5c767fe3
=======
    "All",
>>>>>>> 715d1a83882cd349afaaf16d2168b63ffe2fb929
    "Action",
    "Adventure",
    "Massively Multiplayer",
    "RPG",
    "Shooter",
    "Indie",
    "Casual",
    "Sports",
    "Racing",
    "Puzzle",
    "Platformer",
    "Simulation",
    "Strategy",
];
<<<<<<< HEAD
export default function Store() {
    const [view, setview] = useState(false)
<<<<<<< HEAD
    const [active, setactive] = useState(false)
    const [filter, setfilter] = useState("all")

    function activate(){
        setactive(true)
        setview(true)
    }
    function deactivate(){
        setactive(false)
        setview(false)
    }
=======
    const [allGames, setAllGames] = useState([])
    const [gamesRender, setGamesRender] = useState([])
    const [gender,setGender] = useState([])
    const inputSearch = useRef()
=======
function Games(props) {

    // estados
    const [view, setview] = useState(false);
    const [active, setactive] = useState(false);
    const [filter, setfilter] = useState("all");
>>>>>>> 715d1a83882cd349afaaf16d2168b63ffe2fb929

    
    const [gamesRender, setGamesRender] = useState([]);


    const [gender, setGender] = useState('All');
    const [sortPrice, setSortPrice] = useState(true);
    const [priceMin, setPriceMin] = useState(false)
    const [priceMax, setPriceMax] = useState(false)

    const allGames = useSelector(store => store.gamesReducer.games)
    
    useEffect(() => {

        renderGames(allGames)

    },[allGames])

    useEffect(() => {
        if(gender === 'All') {
            renderGames(allGames)
        }else{
            getGameByGenre(gender)
                .then(res => renderGames(res.data.res))
                .catch(err => console.log(err))
        }
        },[gender,sortPrice,priceMin,priceMax])

    // ref 
    const inputSearch = useRef();
    const genderSelect =useRef();
    const min = useRef();
    const max = useRef();
    const sortRadio = useRef();

   const renderGames = (array)=>{
        const aux = sort(sortPrice,array)
        let priceFilter;
        if(priceMin && priceMax){
            priceFilter = aux.filter( game => game.price >= priceMin && game.price <= priceMax)
        }else if(priceMin){
            priceFilter = aux.filter( game => game.price >= priceMin )
        }else if(priceMax){
            priceFilter = aux.filter( game => game.price <= priceMax )
        }else{
            priceFilter = [...aux]
        }
        setGamesRender(priceFilter) 
   }
    


    // Funciones
    const search = async () => {
        genderSelect.current.value = 'All'
        if (inputSearch.current.value.length > 0) {
            searchGame(inputSearch.current.value.toLowerCase().replace(" ", "-"))
                .then((res) => {
                    renderGames(res.res)
                    
                })
                .catch((err) => console.log(err));
        } else {
            renderGames(allGames)
        }
    };
    function activate() {
        setactive(true);
        setview(true);
    }
    function deactivate() {
        setactive(false);
        setview(false);
    }


<<<<<<< HEAD
>>>>>>> 32d8460343d0829e659d8e197343412e5c767fe3
=======

    const handelSort = (bool) =>{
        setSortPrice(bool)
        // setGamesRender(sort(bool, gamesRender))    
    }
    const handleGender = (e)=>{
        inputSearch.current.value = ''
        setGender(e)
    }
    

    const sort = (bool,array) =>{
        let aux;
        bool ?  aux = array.sort((a,b) => b.price - a.price)
            :  aux = array.sort((a,b) => a.price - b.price)
        return priceMinMax(aux)
    }

    const priceMinMax = (array) => {
      
        const priceMin = min.current.value || 0
        const priceMax = max.current.value || 999999
        const aux = array.filter( game => game.price > priceMin && game.price < priceMax)
        return aux
    }
    const recommended = () => renderGames(allGames.filter(game => game.rating > 4)) 
    const offer = () => renderGames(allGames.filter(game => game.offer)) 
>>>>>>> 715d1a83882cd349afaaf16d2168b63ffe2fb929

    return (
        <div>
            <div className="container logo-game">
                <h1 className="title-games">Game Library</h1>
                <img src={logo} className="logo-home" alt="logo" />
            </div>
            <div className="container cont-filter">
                <div className="cont-search-g">
                    <label className="title-label">Search</label>
                    <div className="cont-search-game">
                        <input
                            type="text"
                            className="search-game"
                            placeholder="Search a Game"
                            ref={inputSearch}
                            onChange={search}
                        />
                    </div>
                </div>
                <div className="cont-select-genders">
                    <label className="title-label">Genders</label>
                    <select
                        type="text"
                        className="select-genders"
                        onChange={(e) => handleGender(e.target.value)}
                        ref={genderSelect}
                    >
                        <option disabled selected>
                            Genders
                        </option>
                        {genders.map((gender, index) => {
                            return (
                                <option
                                    value={gender}
                                    key={index}
                                    className="color-select"
                                >
                                    {gender}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="cont-range">
                    <label className="title-label">Price range</label>
                    <div className="range">
                        <input
                            className="input-renge rigth"
                            type="number"
                            placeholder="Min"
                            ref={min}
                            onChange={()=> setPriceMin(Number(min.current.value))}
                        />
                        <input
                            className="input-renge"
                            type="number"
                            placeholder="Max"
                            ref={max}
                            onChange={()=> setPriceMax(Number(max.current.value))}
                        />
                    </div>
                </div>
                <FormControl component="fieldset">
                    <FormLabel component="legend" className="sort" >Sort by Price</FormLabel>
                    <RadioGroup
                        row
                        aria-label="gender"
                        name="row-radio-buttons-group"
                        ref={sortRadio}
                       
                    >
                        <FormControlLabel
                            value="Higher"
                            control={<Radio />}
                            className="option-radio"
                            label="Higher to Lower"
                            onClick={() =>handelSort(true)}
                            
                            />
                        <FormControlLabel
                            value="Lower"
                            control={<Radio />}
                            className="option-radio"
                            label="Lower to Higher"
                            onClick={() =>handelSort(false)}
                            
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="container cont-filter-games">
                <h6
                    onClick={() => setfilter("all")}
                    className={
                        filter === "all"
                            ? "filter-games-active"
                            : "filter-games"
                    }
                >
                    ALL
                </h6>
                <h6
                    onClick={() => recommended()}
                    className={
                        filter === "recommended"
                            ? "filter-games-active"
                            : "filter-games"
                    }
                >
                    RECOMMENDED
                </h6>
                <h6
                    onClick={() => offer()}
                    className={
                        filter === "offers"
                            ? "filter-games-active"
                            : "filter-games"
                    }
                >
                    OFFERS
                </h6>
                {props.user && <h6
                    onClick={() => setfilter("favorites")}
                    className={
                        filter === "favorites"
                            ? "filter-games-active"
                            : "filter-games"
                    }
                >
                    FAVORITES
                </h6>}
                <div className="views">
                    <ViewComfyIcon
                        onClick={() => deactivate()}
                        className={active ? "view-icon-w" : "view-icon-r"}
                    />
                    <ListIcon
                        onClick={() => activate()}
                        className={active ? "list-icon-r" : "list-icon-w"}
                    />
                </div>
            </div>
            <div className="container box-games">
                <div className={view ? "list-grid" : "all-games"}>
<<<<<<< HEAD
<<<<<<< HEAD
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
                    <CardGames />
                    {view && <p className="description-list-game">Description</p>}
=======
                    {
                        gamesRender.map(game => <CardGames key={game._id} game={game}/>)
                    }
>>>>>>> 32d8460343d0829e659d8e197343412e5c767fe3
                    
=======
                    {gamesRender.map((game) => {
                        if (view) {
                            return (
                                <>
                                    <CardGames key={game._id} game={game} />
                                    <p className="description-list-game">
                                        {game.description_raw}
                                    </p>
                                </>
                            );
                        } else {
                            return <CardGames key={game._id} game={game} />;
                        }
                    })}
>>>>>>> 715d1a83882cd349afaaf16d2168b63ffe2fb929
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
};

export default connect(mapStateToProps, null)(Games);