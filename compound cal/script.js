$(function() {
    function danri() {
        let money = +$("#original").val();
        let year = +$("#year").val();
        let ratio = +$("#ratio").val();
        $("#result").text(String((money + money * (ratio / 100) * year).toFixed(0)));
    }
    function bokri() {
        let money = +$("#original").val();
        let year = +$("#year").val();
        let ratio = +$("#ratio").val();
        $("#result").text(String((money*((1+(ratio/100))**year)).toFixed(0)));
    }
    $("#submit").click(danri);
    $("#submit2").click(bokri);
});