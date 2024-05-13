function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "intranet.domain.com") || shExpMatch(host, "(*.2ip.ru|2ip.ru)")) {
		//return "HTTPS s.thenewone.lol:3145; PROXY n.thenewone.lol:29976; DIRECT";
		return "PROXY Q0Qjgb:aPDFmM@38.170.252.244:9108; DIRECT";
	}
}
