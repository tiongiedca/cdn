function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "2ip.ru") || dnsDomainIs(host, ".2ip.ru")) {
		return "HTTPS Q0Qjgb:aPDFmM@38.170.252.244:9108; PROXY Q0Qjgb:aPDFmM@38.170.252.244:9108; DIRECT";
	}
	else {
		return "DIRECT";
	}
}
