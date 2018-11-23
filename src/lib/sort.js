const Sortnum = (temp) =>{
    var list = {};
    list = temp;
    list.sort( function ( a, b ) { return b.poll - a.poll; } );
    return list;
}
export {Sortnum}