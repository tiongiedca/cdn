function FindProxyForURL(url, host) {
	if (shExpMatch(host, "jw.org|*.jw.org|jw-russia.org|*.jw-russia.org|jw-cdn.org|*.jw-cdn.org|*.cloudfront.net|*.akamaihd.net|jwpub.org|*.jwpub.org|sharefile.com|*.sharefile.com|sharefile.io|*.sharefile.io|sf-api.com|*.sf-api.com")) {
		return "SOCKS5 31.207.47.250:8443; DIRECT";
	}
}
