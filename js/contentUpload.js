contentUpload();

function contentUpload() {
    $("nav").load("/components/nav.html");
    $("header").load("/components/header.html");
    $("#services").load("/components/services.html");
    $("#projects").load("/components/projects.html");
    $("#contact").load("/components/contact.html");
    $("footer").load("/components/footer.html");
}