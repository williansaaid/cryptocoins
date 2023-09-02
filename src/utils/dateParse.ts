export const parseYYMMDD = (ISODate: string) => ISODate.split('T')[0]

export const parseDDMMYY = (ISODate: string) => {
    const date = parseYYMMDD(ISODate).split('-');
    return `${date[2]}-${date[1]}-${date[0]}`
}

export const parseDDMM = (ISODate: string) => {
    const date = parseYYMMDD(ISODate).split('-');
    return `${date[2]}-${date[1]}`
}

export const parseHH = (ISODate: string) => (ISODate.split('T')[1]).split('.')[0]

export const parseDDMMHH = (ISODate: string) => `${parseHH(ISODate)} del ${parseDDMM(ISODate)}`