import {axiosAPI} from "../Axios/axiosAPI";
import {Product} from "../Types";

export async function getKabumData(idOrUrl: string): Promise<Product> {
    const pattern = /\/(?<codigo>[0-9]+)/
    let codigo: number

    if (+idOrUrl) {
        codigo = +idOrUrl
    } else if (pattern.test(idOrUrl)) {
        codigo = +idOrUrl.match(pattern).groups.codigo
    } else {
        throw new Error('Copy the product URL or code')
    }

    return await axiosAPI.post(`/product/${codigo}`).then(res => JSON.parse(res.data).data).catch(() => {
        throw new Error('Unexpected Error')
    })
}
