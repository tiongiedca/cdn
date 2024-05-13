function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "intranet.domain.com") || shExpMatch(host, "(*.jw.org|jw.org)")) {
		return "PROXY Q0Qjgb:aPDFmM@38.170.252.244:9108; DIRECT";
	}
	return "DIRECT";
}
