    //tolocaleDateString
    const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
    document.getElementById("datetime").textContent = new Date().toLocaleDateString("en-US", options);