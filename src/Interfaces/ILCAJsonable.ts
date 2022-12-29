import LCAJsonType from "../types/LCAJsonType";

export default interface ILCAJsonable {
    toLCAJson: () => LCAJsonType;
}