let loffloor;
let boffloor;
let loftile;
let bofftile;
let areaoffloor;
let areaoftile;
let tnumoftiles;

let numOfTiles = () => {
    loffloor = document.getElementById("lengthoffloor").value;
    boffloor = document.getElementById("breadthoffloor").value;
    loftile = document.getElementById("lengthoftile").value;
    bofftile = document.getElementById("breadthoftile").value;

    areaoffloor =loffloor*boffloor;
    areaoftile=loftile*bofftile;
    tnumoftiles=areaoffloor/areaoftile;
    document.write(tnumoftiles)
}