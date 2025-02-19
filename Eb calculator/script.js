document.addEventListener("DOMContentLoaded", function () {
    const previous = document.getElementById("pre");
    const current = document.getElementById("cur");
    const total = document.getElementById("to");

    window.etb = function () {
        let pre = Number(previous.value);
        let cur = Number(current.value);

       
        if (previous.value === "" || current.value === "") {
            alert("Please enter both previous and current readings.");
            return;
        }

       
        if (pre > cur) {
            alert("Previous unit must be smaller than current unit.");
            return;
        }

        let units = cur - pre;
        let cost = 0;

        if (units <= 100) {
            total.innerHTML = "Bill not generated for consumption up to 100 units.";
            return;
        } else if (units <= 500) {
            if (units > 400) cost += (units - 400) * 6;
            if (units > 200) cost += (Math.min(units, 400) - 200) * 4.5;
            if (units > 100) cost += (Math.min(units, 200) - 100) * 2.25;
        } else {
            if (units > 1000) cost += (units - 1000) * 11;
            if (units > 800) cost += (Math.min(units, 1000) - 800) * 10;
            if (units > 600) cost += (Math.min(units, 800) - 600) * 9;
            if (units > 500) cost += (Math.min(units, 600) - 500) * 8;
            cost += (Math.min(units, 500) - 400) * 6;
            cost += (Math.min(units, 400) - 100) * 4.5;
        }

        
        total.innerHTML = `Total Electricity Bill: ₹${cost.toFixed(2)}`;
    };

   
    window.handleClear = function () {
        previous.value = "";
        current.value = "";
        total.innerHTML = ""; 
    };
});
