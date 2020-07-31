var navDom =
    `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">APU TA</a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="../Lab">Lab</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../Feedback">Feedback</a>
            </li>
        </ul> 
        <a href="#" onclick="logout()" class="btn btn-outline-info ">Log out</a>
    </div>
</nav>
`;

$('nav').replaceWith(navDom);