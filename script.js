header=document.getElementsByTagName("header");
header[0].innerHTML=`

<div class="d-flex justify-content-end" >
    <a class="navbar-brand" href=""><img src="mrstrid.png"></a>

<nav class="navbar navbar-expand-lg bg-body-tertiary" style="width: 90%;">

  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav justify-content-around" style="width: 100%;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about us.html">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="plats&bokning.html">plats&bokning</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="menu.html">meny</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>`

footer=document.getElementsByTagName("footer");
footer[0].innerHTML=`
<div class="d-flex justify-content-center" >
    <p>öppetider: måndag-söndag 11:00-22:00 
    | kontakt: cheftingeling@gmail.com | 
    telefon: 012-3456789</p>`