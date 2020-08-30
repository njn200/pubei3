var x = 1;
var a = 1;
function checkall() {
    for (var i = 1; i < a; i++) {
        if (document.getElementById(i.toString()))
            document.getElementById(i.toString()).checked = true;
    }
}
function deselectall() {
    for (var i = 1; i < a; i++) {
        if (document.getElementById(i.toString())) {
            document.getElementById(i.toString()).checked = false;
        }
    }
}
function add() {
    var data = document.getElementById("tex").value;
    var set = document.createElement("li");
    set.setAttribute('id', 'x:' + x.toString());
    set.innerHTML = '<input name="list" type="checkbox"  id=' + a.toString() + '>' + data;
    var ad = document.getElementById('ul');
    ad.appendChild(set);
    x++;
    a++;
}
function remove() {
    for (var i = 1; i < a; i++) {
        if (document.getElementById(i.toString())) {
            if (document.getElementById(i.toString()).checked == true) {
                var x1 = document.getElementById('x:' + i.toString());
                var list = document.getElementById('ul');
                list.removeChild(x1);
            }
        }

    }
}

/*没实现，不知道错在哪儿了
function hotkey() {
    var i = 1;
    var b = window.event.keyCode;
    switch (b) {
        case 38:
            document.getElementById(i.toString).style.zoom= "100%";
            if (i < 1) {
                i = a;
            }
            i--
            document.getElementById(i.toString).style.zoom = "180%";
            break;
        case 40:
            document.getElementById(i.toString).style.color = "black";
            if (i > a) {
                i = 1;
            }
            i++
            document.getElementById(i.toString).style.color = "red";
            break;
        case 13:
            if (document.getElementById(i.toString()).checked) {
                document.getElementById(i.toString()).checked = false;
            }
            else document.getElementById(i.toString()).checked =true;
            break;
    }
}
document.onkeydown = hotkey;*/
