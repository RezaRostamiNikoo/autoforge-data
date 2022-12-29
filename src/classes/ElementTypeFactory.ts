import eElementType from "../enums/eElementType";

import FloorsCategory from "../elementCategories/FloorsCategory";
import StructuralColumnsCategory from "../elementCategories/StructuralColumnsCategory";
import StructuralFramingCategory from "../elementCategories/StructuralFramingCategory";
import StructuralFoundationsCategory from "../elementCategories/StructuralFoundationsCategory";
import StructuralRebarCategory from "../elementCategories/StructuralRebarCategory";
import ElementCategory from "../elementCategories/ElementCategory";

export default class ElementTypeFactory {

    public static getInstance = (type: eElementType, ...arg: any): ElementCategory => {
        switch (type) {
            case eElementType.Floors:
                return new FloorsCategory(arg[0], arg[1])
            case eElementType.StructuralColumns:
                return new StructuralColumnsCategory(arg[0], arg[1])
            case eElementType.StructuralFraming:
                return new StructuralFramingCategory(arg[0], arg[1])
            case eElementType.StructuralFoundations:
                return new StructuralFoundationsCategory(arg[0], arg[1])
            case eElementType.StructuralRebar:
                return new StructuralRebarCategory(arg[0], arg[1])
        }
    }
}