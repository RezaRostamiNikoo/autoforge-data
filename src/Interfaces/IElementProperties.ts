export default interface IElementProperties {
    "Materials and Finishes"?: MaterialsandFinishes | null;
    "Identity Data"?: IdentityData | null;
    Dimensions?: Dimensions | null;
    "Phasing"?: Phasing | null;
    "Constraints"?: Constraints | null;
    "Structural"?: Structural | null;
    "General"?: General | null;
    "Geometric Position"?: GeometricPosition | null;
    "Construction"?: Construction | null;
    "Other"?: Other | null;
    "Graphics"?: Graphics | null;
    "Analytical Properties"?: AnalyticalProperties | null;
    "Rebar Set"?: RebarSet | null;
    "Text"?: Text | null;
    "Energy Analysis"?: EnergyAnalysis | null;

}
export interface MaterialsandFinishes {
    "Material"?: string | null;
    "Structural Material"?: string | null;
}
export interface IdentityData {
    "Image"?: string | null;
    "Comments"?: string | null;
    "Name"?: string | null;
    "Mark"?: string | null;
    "Type Name"?: string | null;
    "Keynote"?: string | null;
    "Type Image"?: string | null;
    "Model"?: string | null;
    "Manufacturer"?: string | null;
    "Type Comments"?: string | null;
    "URL"?: string | null;
    "Description"?: string | null;
    "Assembly Code"?: string | null;
    "Cost"?: string | null;
    "Section Name Key"?: string | null;
    "Assembly Description"?: string | null;
    "Type Mark"?: string | null;
    "Product data url"?: string | null;
    "Product Guid"?: string | null;
    "OmniClass Number"?: string | null;
    "OmniClass Title"?: string | null;
    "Code Name"?: string | null;
    "Fire Rating"?: string | null;
    "Host Category"?: string | null;
    "Host Mark"?: string | null;
    "Organization Name"?: string | null;
    "Organization Description"?: string | null;
    "Building Name"?: string | null;
    "Author"?: string | null;
}
export interface Dimensions {
    "Projected Area"?: string | null;
    "Surface Area"?: string | null;
    "Volume"?: string | null;
    "b"?: string | null;
    "Length"?: string | null;
    "Elevation at Top"?: string | null;
    "Elevation at Bottom"?: string | null;
    "h"?: string | null;
    "Slope"?: string | null;
    "Perimeter"?: string | null;
    "Area"?: string | null;
    "Thickness"?: string | null;
    "A"?: string | null;
    "B"?: string | null;
    "C"?: string | null;
    "r"?: string | null;
    "Bar Length"?: string | null;
    "Total Bar Length"?: string | null;
    "Bar Diameter"?: string | null;
    "Standard Bend Diameter"?: string | null;
    "Standard Hook Bend Diameter"?: string | null;
    "Stirrup / Tie Bend Diameter"?: string | null;
    "Hook Lengths"?: string | null;
    "Maximum Bend Radius"?: string | null;
    "Pad Width"?: string | null;
    "Pad Length"?: string | null;
    "Pad Depth"?: string | null;
}
export interface Phasing {
    "Phase Created": string;
    "Phase Demolished": string;
}
export interface Constraints {
    "Column Location Mark"?: string | null;
    "Base Level"?: string | null;
    "Base Offset"?: string | null;
    "Top Level"?: string | null;
    "Top Offset"?: string | null;
    "Column Style"?: string | null;
    "Moves With Grids"?: string | null;
    "Room Bounding"?: string | null;
    "Moves With Nearby Elements"?: string | null;
    "Reference Level"?: string | null;
    "Start Level Offset"?: string | null;
    "End Level Offset"?: string | null;
    "Cross - Section Rotation"?: string | null;
    "Work Plane"?: string | null;
    "Orientation"?: string | null;
    "Elevation"?: string | null;
    "Level"?: string | null;
    "Height Offset From Level"?: string | null;
    "Related to Mass"?: string | null;
    "Host"?: string | null;
}
export interface Structural {
    "Enable Analytical Model"?: string | null;
    "Rebar Cover - Top Face"?: string | null;
    "Rebar Cover - Bottom Face"?: string | null;
    "Rebar Cover - Other Faces"?: string | null;
    "Section Shape"?: string | null;
    "Estimated Reinforcement Volume"?: string | null;
    "Rebar Cover"?: string | null;
    "Cut Length"?: string | null;
    "Structural Usage"?: string | null;
    "Stick Symbol Location"?: string | null;
    "Start Connection"?: string | null;
    "End Connection"?: string | null;
    "Camber Size"?: string | null;
    "Number of studs"?: string | null;
    Structural?: string | null;
    "Reinforcement Volume"?: string | null;
}
export interface General {
    "Edition number": string;
}
export interface GeometricPosition {
    "yz Justification": string;
    "y Justification": string;
    "y Offset Value": string;
    "z Justification": string;
    "z Offset Value": string;
    "Start Extension"?: string | null;
    "End Extension"?: string | null;
}
export interface Construction {
    "Start Extension"?: string | null;
    "End Extension"?: string | null;
    Structure?: string | null;
    "Default Thickness"?: string | null;
    Function?: string | null;
    Partition?: string | null;
    "Rebar Number"?: string | null;
    "Schedule Mark"?: string | null;
    Geometry?: string | null;
    Style?: string | null;
    "Base Finishing Turns"?: string | null;
    "Top Finishing Turns"?: string | null;
    Height?: string | null;
    Pitch?: string | null;
    Shape?: string | null;
    "Shape Image"?: string | null;
    "Hook At Start"?: string | null;
    "Hook At End"?: string | null;
    "End Treatment At Start"?: string | null;
    "End Treatment At End"?: string | null;
    Deformation?: string | null;
}
export interface Other {
    "Start Extension Calculation"?: string | null;
    "End Extension Calculation"?: string | null;
    Volume?: string | null;
    "Project Issue Date"?: string | null;
    "Project Status"?: string | null;
    "Client Name"?: string | null;
    "Project Address"?: string | null;
    "Project Name"?: string | null;
    "Project Number"?: string | null;
}
export interface Graphics {
    "Coarse Scale Fill Pattern"?: string | null;
    "Coarse Scale Fill Color"?: string | null;
    "View Visibility States"?: string | null;
    Subcategory?: string | null;
}
export interface AnalyticalProperties {
    "Heat Transfer Coefficient(U)": string | null;
    "Thermal Resistance(R)": string | null;
    "Thermal mass": string | null;
    Absorptance: string | null;
    Roughness: string | null;
}
export interface RebarSet {
    "Layout Rule": string | null;
    Quantity: string | null;
    Spacing: string | null;
}
export interface Text {
    "Reinforcement Specs"?: string | null;
    Mesh?: string | null;
    "Concrete Grade"?: string | null;
    "Pad Type": string | null;
}
export interface EnergyAnalysis {
    "Energy Settings": string | null;
}


class OurClass implements IElementProperties {


}