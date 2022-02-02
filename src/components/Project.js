import React from 'react';
 

const pic ={
    height: '250px'
}
const title = {
    textAlign: 'center',
    paddingBottom: '30px'
}
const nav = {
    padding: '35px',
}

const a = {
    color: 'white'
}
export default function Project({name,image, desc,site,repo }) {
    return (
        <div>
            
            <h3 style={title}>{name}</h3>
            <img style={pic} src={image} alt={desc} />
                <nav style={nav} className="d-flex justify-content-evenly">
                    <a style={a} href={site} >Visit</a>
                    <a style={a} href={repo} >Repository</a>
                </nav>
               
        </div>
    )
}