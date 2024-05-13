function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "intranet.domain.com") || 
		shExpMatch(host, "(*.jw.org|*.jwpub.org|*.jw-cdn.org|jw.org|jwpub.org|jw-cdn.org|2ip.ru)")) {
		return "HTTPS Q0Qjgb:aPDFmM@38.170.252.244:9108; SOCKS5 Q0Qjgb:aPDFmM@38.170.252.244:9108; DIRECT";
	}
	return "DIRECT";
}
