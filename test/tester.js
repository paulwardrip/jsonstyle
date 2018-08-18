
const JsonStyle = require("./../src/jsonstyle");

console.log(
JsonStyle.style({
    ".quiz": {
        "font-family": "Lato, sans-serif",

        ".answerbox": {
            display: "inline-block",
            padding: "1px 0"
        },
        ".answer": {
            display: "inline-block",
            "text-align": "center",
            background: "black",
            margin: "1px 1px",
            padding: "3px 5px",
            cursor: "pointer",
            border: "1px solid black",
            "border-radius": "2px"
        },
        ".unanswered": {
            ".answer": {
                "background": "white",

                ":hover": {
                    color: "lightskyblue"
                }
            }
        },
        ".answered .answer": {
            "font-weight": 200,
            "color": "#C0C0C0"
        },
        ".answered .answer.picked": {
            "font-weight": 700,
            background: "lightblue",
            color: "white"
        },
        ".questiontext": {
            padding: "0 0 0 4px",
            display: "inline-block",
            "vertical-align": "middle"
        }
    }

}));

console.log(
JsonStyle.googlefont("Lato", [200,400,700], true)
);