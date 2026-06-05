let current = "";

const display =
document.getElementById("display");

function press(value){

    current += value;

    display.innerText = current;
}

function clearDisplay(){

    current = "";

    display.innerText = "0";
}

function calculate(){

    if(current === "538"){

        openVault();

        return;
    }

    try{

        current = eval(current).toString();

        display.innerText = current;

    }catch{

        display.innerText = "Error";
    }
}

function openVault(){

    document.getElementById("calculator")
    .style.display = "none";

    document.getElementById("vault")
    .style.display = "block";

    loadNotes();
}

function closeVault(){

    document.getElementById("vault")
    .style.display = "none";

    document.getElementById("calculator")
    .style.display = "block";

    clearDisplay();
}

function saveNotes(){

    const notes =
    document.getElementById("notes").value;

    localStorage.setItem(
        "vaultNotes",
        notes
    );

    alert("Disimpan");
}

function loadNotes(){

    const saved =
    localStorage.getItem("vaultNotes");

    if(saved){

        document.getElementById("notes")
        .value = saved;
    }
}
