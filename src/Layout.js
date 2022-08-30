import { useState, useEffect } from "react";

export default function Layout(){
    const [ faculties, setFaculties ] = useState([]);
    useEffect(()=>{
        fetch('https://630c3e9453a833c534262cfb.mockapi.io/Faculties')
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{setFaculties(res)});
    })

    let formatedFac = faculties.map((fac) => {
        return(<div class="card col-md-3">
            <img src={fac.FacultyImage} class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">{fac.FacultyName}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>);
      });
      return <div className="row">{formatedFac}</div>;
}