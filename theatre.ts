import * as readline from 'readline';

type seat = [string, boolean];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var theatre: seat[][] = [];
let n = 5;

for (let i = 0; i < n; i++) {
    theatre[i] = [];
    for (let j = 0; j < n; j++) {
        theatre[i][j] = [`S${(i + 1)}${(j + 1)}`, false];
    }
}
for (let i = 0; i < n; i++) {
    console.log(theatre[i].join('    '));
}

function promptSeat() {
    rl.question("Enter the Seat number", (input) => {       

        let n = parseInt(input);

        if (isNaN(n) || n < 11 || n > 55) {
            console.log("Invalid seat number. Please enter a valid seat number.");
            return promptSeat(); // Re-prompt for valid input
        }

        let c = n % 10;
        n = n / 10;
        let r = Math.floor(n % 10);

        if (theatre[Math.floor(n / 10) - 1][c - 1][1]) {
            console.log("Seat already booked. Please choose another seat.");
            return promptSeat(); // Re-prompt for another seat
        }        

        console.log(input+" seat booked");
        theatre[r - 1][c - 1][1] = true;

        for (let i = 0; i < 5; i++) {
            console.log(theatre[i].join('    '));
        }
        let availableSeats = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (!theatre[i][j][1]) {
                    availableSeats++;
                }
            }
        }

        if (availableSeats > 0) {
            promptSeat(); // Prompt for another seat if available
        } else {
            console.log("No more available seats.");
            rl.close(); // Close the readline interface when done
        }
    });
}
promptSeat();