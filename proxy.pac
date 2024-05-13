function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "intranet.domain.com") || shExpMatch(host, "(*.jw.org|jw.org)")) {
		return "HTTPS Q0Qjgb:aPDFmM@38.170.252.244:9108; DIRECT";
	}
	//if (dnsDomainIs(host, "jw.org") || dnsDomainIs(host, "*.jw.org") || dnsDomainIs(host, "jwpub.org") || dnsDomainIs(host, "*.jwpub.org") || dnsDomainIs(host, "jw-cdn.org") || dnsDomainIs(host, "*.jw-cdn.org") || dnsDomainIs(host, "2ip.ru")) {
	//	return "HTTPS Q0Qjgb:aPDFmM@38.170.252.244:9108; DIRECT";
	//}
	return "DIRECT";
}
