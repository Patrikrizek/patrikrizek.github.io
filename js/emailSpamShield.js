function decryptEmail(encoded) {
    const address = atob(encoded);
    window.location.href = "mailto:" + address;
}