import axios from 'axios';
import React from 'react'

import './index'
import { useState,useEffect } from 'react';

const ReactGithubAPI = () => {
    const [name,setName]=useState();
    const [bio,setBio]=useState();
    const [image,setImage]=useState()
const [followers,setFollowers]=useState()
const [following,setFollowing]=useState()
const [githubRepos,setgithubRepos]=useState()





    useEffect(()=>{
    async function getData(){
        const res=await axios.get(`https://api.github.com/users/${name}`)
console.log(res.data.bio)
setBio(res.data.bio);
setImage(res.data.avatar_url)
setFollowers(res.data.followers)
setFollowing(res.data.following)  
setgithubRepos(res.data.public_repos)  
}
    getData();
})
  return (
    <>

 
<button type="button" class="btn btn-warning ">Enter user name</button>
<br/>
<br/>
 <input type="text" placeholder='Enter your name' onChange={((event)=>{
  setName(event.target.value)
 })} value={name}></input>


    <span class="placeholder col-12"></span>

<span class="placeholder col-12 bg-success"></span>
<span class="placeholder col-12 bg-danger"></span>
<span class="placeholder col-12 bg-warning"></span>
<span class="placeholder col-12 bg-info"></span>

   

    <div class="card">
  
  <div class="card-body">
    <h1 class="card-title"><strong>{name}</strong></h1>
    <img src={image} width="195px" height="156px"></img>

    <h3 class="card-text">Bio     :  {bio}</h3>
    <h3 class="card-text">Followers:  {followers}</h3>
    <h3 class="card-text">Following: {following}</h3>
    <h3 class="card-text">Public Github Repos  :{githubRepos}</h3>
    
    <a href="#" class="btn btn-warning">Github Profile</a>
  </div>
</div>
<span class="placeholder col-12"></span>

<span class="placeholder col-12 bg-danger"></span>
<span class="placeholder col-12 bg-warning"></span>
<span class="placeholder col-12 bg-info"></span>

<span class="placeholder col-12 bg-dark"></span>


  
    </>
  )
}

export default ReactGithubAPI;


