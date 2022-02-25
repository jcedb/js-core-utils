export interface ICache {
	data: any,
	timeCreated: number,
	expiresIn: number
}

export interface ICachePayload {
	data: Array<any> | object | string | number | boolean
}