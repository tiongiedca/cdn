function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "(*.jw.org|*.jwpub.org|*.jw-cdn.org|jw.org|jwpub.org|jw-cdn.org)")) {
		return "HTTPS Q0Qjgb:aPDFmM@38.170.252.244:9108; SOCKS5 Q0Qjgb:aPDFmM@38.170.252.244:9108; DIRECT";
	}
	return "DIRECT";
}
