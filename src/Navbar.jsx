import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div style={{width:"100%"}}>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <Link to={""}>Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="/home"></a> */}
          <Link to={"/home"}>Home</Link>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">Features</a> */}
          <Link to={"/http"}>Features</Link>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">Pricing</a> */}
          <Link to={"/assign"}>Pricing</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar