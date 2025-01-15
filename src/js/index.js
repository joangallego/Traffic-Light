document.addEventListener("DOMContentLoaded", () => {
    let currentColor = "red";

    const changeColor = () => {
        document.getElementById("red").classList.remove("active");
        document.getElementById("yellow").classList.remove("active");
        document.getElementById("green").classList.remove("active");

        if (currentColor === "red") {
            currentColor = "yellow";
            document.getElementById("yellow").classList.add("active");
        } else if (currentColor === "yellow") {
            currentColor = "green";
            document.getElementById("green").classList.add("active");
        } else {
            currentColor = "red";
            document.getElementById("red").classList.add("active");
        }
    };

    document.getElementById("changeColor").addEventListener("click", changeColor);
    document.getElementById("red").classList.add("active");
});
