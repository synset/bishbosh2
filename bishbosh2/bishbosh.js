function runBishBosh() {

    let bish = document.getElementById("bishNumber").value;
    let bosh = document.getElementById("boshNumber").value;
    let number = document.getElementById("lengthNumber").value;

    for (let i = 1; i <= number; i++) {
        let results = "";
        if (i % bish == 0 && i % bosh == 0) results = "Bish-Bosh";
        else if (i % bish == 0) results = "Bish";
        else if (i % bosh == 0) results = "Bosh";
        else results = i;

        document.getElementById("displayResults").innerHTML += results + '<br />';
    }
}