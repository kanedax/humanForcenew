import M from 'materialize-css';

export const sidenav = () => {

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'right',
    });
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
        coverTrigger: false,
        constrainWidth: true,
    });
    // select
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {
        coverTrigger : false,
    });
}