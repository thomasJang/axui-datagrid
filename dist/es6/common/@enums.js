"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataGridEnums;
(function (DataGridEnums) {
    let EventNames;
    (function (EventNames) {
        EventNames["WHEEL"] = "wheel";
        EventNames["KEYDOWN"] = "keydown";
        EventNames["KEYUP"] = "keyup";
        EventNames["MOUSEDOWN"] = "mousedown";
        EventNames["MOUSEUP"] = "mouseup";
        EventNames["CLICK"] = "click";
        EventNames["TOUCHSTART"] = "touchStart";
        EventNames["BLUR"] = "blur";
        EventNames["CONTEXTMENU"] = "contextmenu";
    })(EventNames = DataGridEnums.EventNames || (DataGridEnums.EventNames = {}));
    let KeyCodes;
    (function (KeyCodes) {
        KeyCodes[KeyCodes["BACKSPACE"] = 8] = "BACKSPACE";
        KeyCodes[KeyCodes["ENTER"] = 13] = "ENTER";
        KeyCodes[KeyCodes["TAB"] = 9] = "TAB";
        KeyCodes[KeyCodes["SHIFT"] = 16] = "SHIFT";
        KeyCodes[KeyCodes["CTRL"] = 17] = "CTRL";
        KeyCodes[KeyCodes["ALT"] = 18] = "ALT";
        KeyCodes[KeyCodes["ESC"] = 27] = "ESC";
        KeyCodes[KeyCodes["SPACE"] = 32] = "SPACE";
        KeyCodes[KeyCodes["PAGE_UP"] = 33] = "PAGE_UP";
        KeyCodes[KeyCodes["PAGE_DOWN"] = 34] = "PAGE_DOWN";
        KeyCodes[KeyCodes["END"] = 35] = "END";
        KeyCodes[KeyCodes["HOME"] = 36] = "HOME";
        KeyCodes[KeyCodes["LEFT_ARROW"] = 37] = "LEFT_ARROW";
        KeyCodes[KeyCodes["UP_ARROW"] = 38] = "UP_ARROW";
        KeyCodes[KeyCodes["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
        KeyCodes[KeyCodes["DOWN_ARROW"] = 40] = "DOWN_ARROW";
    })(KeyCodes = DataGridEnums.KeyCodes || (DataGridEnums.KeyCodes = {}));
    let MetaKeycodes;
    (function (MetaKeycodes) {
        MetaKeycodes[MetaKeycodes["A"] = 65] = "A";
        MetaKeycodes[MetaKeycodes["B"] = 66] = "B";
        MetaKeycodes[MetaKeycodes["C"] = 67] = "C";
    })(MetaKeycodes = DataGridEnums.MetaKeycodes || (DataGridEnums.MetaKeycodes = {}));
    let ScrollTypes;
    (function (ScrollTypes) {
        ScrollTypes[ScrollTypes["HORIZONTAL"] = 0] = "HORIZONTAL";
        ScrollTypes[ScrollTypes["VERTICAL"] = 1] = "VERTICAL";
    })(ScrollTypes = DataGridEnums.ScrollTypes || (DataGridEnums.ScrollTypes = {}));
    let DirectionTypes;
    (function (DirectionTypes) {
        DirectionTypes[DirectionTypes["LEFT"] = 0] = "LEFT";
        DirectionTypes[DirectionTypes["RIGHT"] = 1] = "RIGHT";
        DirectionTypes[DirectionTypes["UP"] = 2] = "UP";
        DirectionTypes[DirectionTypes["DOWN"] = 3] = "DOWN";
    })(DirectionTypes = DataGridEnums.DirectionTypes || (DataGridEnums.DirectionTypes = {}));
    let DispatchTypes;
    (function (DispatchTypes) {
        DispatchTypes[DispatchTypes["SET_DATA"] = 0] = "SET_DATA";
        DispatchTypes[DispatchTypes["SORT"] = 1] = "SORT";
        DispatchTypes[DispatchTypes["FILTER"] = 2] = "FILTER";
        DispatchTypes[DispatchTypes["UPDATE"] = 3] = "UPDATE";
        DispatchTypes[DispatchTypes["RESIZE_COL"] = 4] = "RESIZE_COL";
        DispatchTypes[DispatchTypes["SELECT"] = 5] = "SELECT";
        DispatchTypes[DispatchTypes["SELECT_ALL"] = 6] = "SELECT_ALL";
        DispatchTypes[DispatchTypes["CHANGE_SELECTION"] = 7] = "CHANGE_SELECTION";
    })(DispatchTypes = DataGridEnums.DispatchTypes || (DataGridEnums.DispatchTypes = {}));
    let PageButtonActions;
    (function (PageButtonActions) {
        PageButtonActions["PAGE_FIRST"] = "PAGE_FIRST";
        PageButtonActions["PAGE_PREV"] = "PAGE_PREV";
        PageButtonActions["PAGE_BACK"] = "PAGE_BACK";
        PageButtonActions["PAGE_PLAY"] = "PAGE_PLAY";
        PageButtonActions["PAGE_NEXT"] = "PAGE_NEXT";
        PageButtonActions["PAGE_LAST"] = "PAGE_LAST";
    })(PageButtonActions = DataGridEnums.PageButtonActions || (DataGridEnums.PageButtonActions = {}));
})(DataGridEnums = exports.DataGridEnums || (exports.DataGridEnums = {}));
