import {createJSONFrom} from "./engine";
import {sendFromJS} from "./bridge";

export function chooseImage(obj) {
    const jsonObj = createJSONFrom("ui", "chooseImage", obj);
    sendFromJS(JSON.stringify(jsonObj));
}

export function showDateTimePicker(obj) {
    let defaultDateTSInSeconds = Math.floor(new Date().getTime() / 1000);
    let dayInSeconds = 60 * 60 * 24;
    obj.data = {};
    if (obj.type)
        obj.data.type = obj.type;
    else
        obj.data.type = "date";
    if (obj.date)
        obj.data.date = obj.date;
    else
        obj.data.date = defaultDateTSInSeconds;
    if (obj.minDate)
        obj.data.minDate = obj.minDate;
    else
        obj.data.minDate = defaultDateTSInSeconds;
    if (obj.maxDate)
        obj.data.maxDate = obj.maxDate;
    else
        obj.data.maxDate = defaultDateTSInSeconds + 3 * dayInSeconds;
    if (obj.minuteInterval)
        obj.data.minuteInterval = obj.minuteInterval;
    else
        obj.data.minuteInterval = 15;
    const jsonObj = createJSONFrom("ui", "datePicker", obj);
    sendFromJS(JSON.stringify(jsonObj));
}