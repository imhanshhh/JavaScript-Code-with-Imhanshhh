var a = 10;                    //global Scope

function show() {
    console.log(a);            //can Access global Variable

}
show()
console.log(a);                // work here too

function test () {
    var b = 20;               
    console.log("Inside function: " + b);

}

test();
// console.log("Outside function : " + b);     b  is not defined  //error

if (true) {
    let pen = "Blue pen";
    const pencil = "black pencil";
    console.log("inside block: ", pen, pencil);

}
// console.log("outside block: " , pen, pencil);         // error

function bag () {
    let pen = "gel pen";

    function pencilBox () {
        let pencil = "Drawing Pencil";

        function useItems() {
            console.log("from bag : ", pen);             //accessible
            console.log("from pencilBox: ", pencil);     //accessible

        }

        useItems();                                    //accessible outer
        console.log(pen);
        console.log(pencil);                           // accessible own

    }

    pencilBox();

}
bag();