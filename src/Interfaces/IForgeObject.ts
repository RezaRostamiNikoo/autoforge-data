export default interface IForgeObject {
    _id: String;
    objectid: Number;
    name: String;
    objects?: Array<IForgeObject>
}