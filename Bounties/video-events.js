const ranges = [{ "time": "00:00", "desc": "Intro" },
{ "time": "00:33", "desc": "Patrick and Nico" },
{ "time": "00:50", "desc": "Jason" },
{ "time": "01:08", "desc": "Marcus" },
{ "time": "01:48", "desc": "Levi" }
];

document.addEventListener("DOMContentLoaded", () => {
    let text = "";
    for (let i = 0; i < ranges.length; i++) {
        text += `<div> <span id='time' onclick= "scrollToSegment('${ranges[i].time}')"> ${ranges[i].time}  </span>:${ranges[i].desc} </div>`;
    }
    document.getElementById("demo").innerHTML = text;
    let arr = document.getElementsByClassName("segment-start")
    player.ready(function () {

        player.tech(true).on('keystatuschange', function (event) {
            console.log("event: ", event);
            player.muted(true)
            if (arr.length !== ranges.length) {
                var total = player.duration()
                let bar = document.getElementsByClassName("vjs-progress-holder")[0]
                for (let i = 0; i < ranges.length; i++) {
                    let div = document.createElement("div")
                    div.className = "segment-start"
                    div.style.left = (getSeconds(ranges[i].time) / total) * 100 + "%"
                    bar.appendChild(div)
                }
            }
        });


    });
})

const getSeconds = (strValue) => {
    let secs = 0
    let time = strValue.split(":")
    if (time.length === 3) {
        secs += parseInt(time[0]) * 60 * 60
        secs += parseInt(time[1]) * 60
        secs += parseInt(time[2])
    }
    if (time.length === 2) {
        secs += parseInt(time[0]) * 60
        secs += parseInt(time[1])
    }
    return secs
}

const scrollToSegment = (str) => {
    console.log("in scroll");
    player.currentTime(getSeconds(str))
}