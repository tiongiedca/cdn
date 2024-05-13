function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "intranet.domain.com") ||
		shExpMatch(host, "(*.jw.org|jw.org)"))
		return "HTTPS s.thenewone.lol:3145; PROXY n.thenewone.lol:29976; DIRECT";
}
