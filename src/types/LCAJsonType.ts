type LCAJsonType = {
    name: string,
    material?: string,
    amount?: string,
    unit?: string,
    sub?: Array<LCAJsonType>
}

export default LCAJsonType;