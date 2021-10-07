export var Language;
(function (Language) {
    Language[Language["Other"] = 0] = "Other";
    Language[Language["Hindi"] = 1] = "Hindi";
    Language[Language["Engilsh"] = 2] = "Engilsh";
    Language[Language["Tamil"] = 3] = "Tamil";
    Language[Language["Telgu"] = 4] = "Telgu";
})(Language || (Language = {}));
export const LanguageLabel = new Map([
    [Language.Other, "Other"],
    [Language.Hindi, "Hindi"],
    [Language.Engilsh, "Engilsh"],
    [Language.Tamil, "Tamil"],
    [Language.Telgu, "Telgu"]
]);
export var Gender;
(function (Gender) {
    Gender[Gender["Other"] = 0] = "Other";
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
})(Gender || (Gender = {}));
export var Role;
(function (Role) {
    Role[Role["Other"] = 0] = "Other";
    Role[Role["Actor"] = 1] = "Actor";
    Role[Role["Actress"] = 2] = "Actress";
    Role[Role["SupportingActor"] = 3] = "SupportingActor";
    Role[Role["SupportingActress"] = 4] = "SupportingActress";
    Role[Role["Producer"] = 5] = "Producer";
    Role[Role["Director"] = 6] = "Director";
})(Role || (Role = {}));
export const RoleLabel = new Map([
    [Role.Other, "Other"],
    [Role.Actor, "Actor"],
    [Role.Actress, "Actress"],
    [Role.SupportingActor, "Supporting Actor"],
    [Role.SupportingActress, "Supporting Actress"],
    [Role.Producer, "Producer"],
    [Role.Director, "Director"],
]);
export var Gener;
(function (Gener) {
    Gener[Gener["Other"] = 0] = "Other";
    Gener[Gener["Action"] = 1] = "Action";
    Gener[Gener["Comedy"] = 2] = "Comedy";
    Gener[Gener["Drama"] = 3] = "Drama";
    Gener[Gener["Fantasy"] = 4] = "Fantasy";
    Gener[Gener["Horror"] = 5] = "Horror";
    Gener[Gener["Mystery"] = 6] = "Mystery";
    Gener[Gener["Romance"] = 7] = "Romance";
    Gener[Gener["Thriller"] = 8] = "Thriller";
})(Gener || (Gener = {}));
export const GenresLabel = new Map([
    [Gener.Other, "Other"],
    [Gener.Action, "Action"],
    [Gener.Comedy, "Comedy"],
    [Gener.Drama, "Drama"],
    [Gener.Fantasy, "Fantasy"],
    [Gener.Horror, "Horror"],
    [Gener.Mystery, "Mystery"],
    [Gener.Romance, "Romance"],
    [Gener.Thriller, "Thriller"],
]);
export var MovieType;
(function (MovieType) {
    MovieType[MovieType["Other"] = 0] = "Other";
    MovieType[MovieType["_2D"] = 1] = "_2D";
    MovieType[MovieType["_3D"] = 2] = "_3D";
    MovieType[MovieType["IMAX"] = 3] = "IMAX";
    MovieType[MovieType["IMAX3D"] = 4] = "IMAX3D";
})(MovieType || (MovieType = {}));
export const MovieTypeLabel = new Map([
    [MovieType.Other, "Other"],
    [MovieType._2D, "2D"],
    [MovieType._3D, "3D"],
    [MovieType.IMAX, "IMAX"],
    [MovieType.IMAX3D, "IMAX 3d"]
]);
export var CertificateType;
(function (CertificateType) {
    CertificateType[CertificateType["Other"] = 0] = "Other";
    CertificateType[CertificateType["U"] = 1] = "U";
    CertificateType[CertificateType["UA"] = 2] = "UA";
    CertificateType[CertificateType["A"] = 3] = "A";
})(CertificateType || (CertificateType = {}));
export var SeatType;
(function (SeatType) {
    SeatType[SeatType["Other"] = 0] = "Other";
    SeatType[SeatType["FrontRow"] = 1] = "FrontRow";
    SeatType[SeatType["MiddleRow"] = 2] = "MiddleRow";
    SeatType[SeatType["LastRow"] = 3] = "LastRow";
})(SeatType || (SeatType = {}));
//# sourceMappingURL=Enum.js.map