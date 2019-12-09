function handleRouter() {
    var selected = document.getElementById('router-options').value;
    var routes = [].slice.call( document.getElementsByClassName('route') );
    routes.forEach(function( route ) {
        route.classList.add('displayNone');
    });
    document.getElementsByClassName(selected)[0].classList.remove('displayNone');
}