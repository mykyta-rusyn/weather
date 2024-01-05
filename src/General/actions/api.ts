import Constants from 'expo-constants';

type URL = string;
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Headers = {[key: string]: string;};

export class ApiRequest {
	static readonly key = `key=${Constants.expoConfig!.extra!.wetherApiKey}`;
	
	private readonly _method: Method;
	private readonly _url: URL;
	private _body?: string;
	private _headers: Headers = {};
	private _signal?: AbortSignal;
	private _queryParams: string[] = [];

	constructor(url: URL, method: Method) {
		this._method = method;
		this._url = Constants.expoConfig!.extra!.baseWeatherUrl + url;
	}

	addHeader(key: string, value: string): ApiRequest {
		this._headers[key] = value;

		return this;
	}

	addQuery(key: string, value: string): ApiRequest {
		this._queryParams.push(`${key}=${value}`);

		return this;
	}

	addSignal(signal: AbortSignal): ApiRequest {
		this._signal = signal;

		return this;
	}

	setSecured(): ApiRequest {
		this._queryParams.push(ApiRequest.key);

		return this;
	}

	withBody(body: unknown): ApiRequest {
		this._body = JSON.stringify(body);

		return this;
	}

	execute(): Promise<Response> {
		return fetch(this._createUrl(), {
			body: this._body,
			headers: this._headers,
			method: this._method,
			signal: this._signal,
		});
	}

	async executeAsJson<T>(): Promise<T | undefined> {
		return this.execute().then((res) => {
			if (!res.ok) {
				console.debug('[API ERR]', this._url, this._queryParams, this._body, this._method, res.status, res.statusText);

				return undefined;
			}

			return res.json();
		});
	}

	private _createUrl(): string {
		if (this._queryParams.length) {
			return this._url + '?' + this._queryParams.join('&');
		}

		return this._url;
	}
}
