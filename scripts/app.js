window.onload = function () {
    var timer = new Vue({
        el: '#timer',
        data: {
            run: false,
            pointer: 0,
            segments: [
                {name: "Asylum Demon", time: 0, lap: 0},
                {name: "Get Weapon", time: 0, lap: 0},
                {name: "Gargoyles", time: 0, lap: 0},
                {name: "Quelaag", time: 0, lap: 0},
                {name: "Sif", time: 0, lap: 0},
                {name: "Iron Golem", time: 0, lap: 0},
                {name: "O&S", time: 0, lap: 0},
                {name: "Four Kings", time: 0, lap: 0},
                {name: "Seath", time: 0, lap: 0},
                {name: "Pinwheel", time: 0, lap: 0},
                {name: "Nito", time: 0, lap: 0},
                {name: "Firesage", time: 0, lap: 0},
                {name: "Centipede", time: 0, lap: 0},
                {name: "BoC", time: 0, lap: 0},
                {name: "Gwyn", time: 0, lap: 0}
            ]
        },
        methods: {
            update: function () {
                if (this.run) {
                    current = this.segments[this.pointer];
                    current.time += 1;
                    current.lap += 1;
                }
            },
            split: function () {
                first = this.segments[0];
                if (!this.run && first.time == 0) {
                    this.run = true;
                }
                else if (this.run) {
                    current = this.segments[this.pointer];
                    next = this.segments[this.pointer + 1];

                    next.time += current.time;
                    this.pointer += 1;
                }
            },
            unsplit: function () {
                if (this.run && this.pointer > 0) {
                    current = this.segments[this.pointer];
                    previous = this.segments[this.pointer - 1];

                    previous.time = current.time;
                    previous.lap += current.lap;
                    current.time = 0;
                    current.lap = 0;
                    this.pointer -= 1;
                }
            },
            pause: function () {
                this.run = !this.run;
            },
            reset: function () {
                this.segments.forEach(function (segment) {
                    segment.time = 0;
                    segment.lap = 0;
                });
                this.pointer = 0;
                this.run = false;
            }
        }
    });
    setInterval(function () {
        timer.update();
    }, 100);
};