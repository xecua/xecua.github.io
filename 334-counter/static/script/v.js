const se = new Howl({
    src: ["static/audio/se.mp3"]
});


const app = new Vue({
    el: "#app",
    data: {
        lotte: 0,
        hanshin: 0,
    },
    methods: {
        count(e) {
            this.lotte += 33;
            this.hanshin += 4;
            se.play()
        },
    },
});
