function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Crvena jabuka",
            title: "Crvena jabuka",
            release_year: 1986,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            }
            // Add a record here
        }
    }; return myMusic;
}
console.log(myFunction()[2]);
module.exports = myFunction;