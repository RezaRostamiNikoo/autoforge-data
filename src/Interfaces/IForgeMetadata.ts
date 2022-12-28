export default interface IForgeMetadata {
    _id: String;
    objectid: Number;
    name: String;
    objects?: Array<IForgeMetadata>
}