<script>
  function checkForm(jQueryFormInputs){
    var formValidity=true;
    $.each(jQueryFormInputs,function (id,item){
      if (item.validity.valid===false){
        $(item).css("transition","all 1s ease-in").css("backgroundColor","#fdd");
        formValidity = false;
      }
    });
    return formValidity;
  }
</script>


