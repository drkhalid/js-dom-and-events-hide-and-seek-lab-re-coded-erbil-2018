function getFirstSelector(selector){
return document.querySelector(selector)}

function nestedTarget(){
return document.querySelector('#nested .target')}


function increaseRankBy(n) {
    let ranked = document.querySelectorAll('.ranked-list')
    for (let i = 0, l = ranked.length; i < l; i++) {

        let childs = ranked[i].children

        for (let o = 0, p = child.length; o < p; o++) {
            childs[o].innerHTML = parseInt(childs[o].innerHTML + n)
        }
    }
}


function deepestChild() {
    let grand = document.querySelectorAll('#grand-node div');
    let deepest = grand[grand.length-1];
    return deepest;}