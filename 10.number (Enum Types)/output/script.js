"use strict";
var ResType;
(function (ResType) {
    ResType[ResType["PENDING"] = 0] = "PENDING";
    ResType[ResType["SUCCESS"] = 1] = "SUCCESS";
    ResType[ResType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResType[ResType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResType || (ResType = {}));
const resposeData = {
    status: 200,
    type: ResType.UNAUTHENTICATED,
    data: {
        name: "Sazzad",
        designation: "Software Engineer"
    }
};
console.log(resposeData);
