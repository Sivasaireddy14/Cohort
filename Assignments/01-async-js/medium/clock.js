// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?
// Can you make it so that it updates every second, and shows time in the following formats - 
//  - HH:MM::SS (Eg. 13:45:23)
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let date = new Date()
let h = date.getHours(), m = date.getMinutes(), s = date.getSeconds()
const clock = () => {
    let hh, mm, ss, rh, ap = "AM"
    s += 1
    if (s > 59) {
        s = 0
        m += 1
    }
    if (m > 59) {
        m = 0
        h += 1
    }
    if (h > 23) {
        h = 0
    }
    if (h > 12) {
        rh = h - 12
        ap = "PM"
    }
    if (s < 10) { ss = "0" + s } else { ss = s }
    if (m < 10) { mm = "0" + m } else { mm = m }
    if (h < 10) { hh = "0" + h } else { hh = h }
    if (rh < 10) { rh = "0" + rh }
    console.log(hh + ":" + mm + ":" + ss);
    console.log(rh + ":" + mm + ":" + ss + " " + ap);
}
setInterval(clock, 1000)