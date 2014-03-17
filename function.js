<script>
 function checkForm(jQueryFormInputs){
    var formValidity=true;

    $.each(jQueryFormInputs,function (id,resItem)
    {
          var node;
          if ($(resItem).attr("data-validationtarget") && $(resItem).attr("data-validationwrapper")){
              node = $(resItem).closest( $(resItem).attr("data-validationwrapper") ).find( $(resItem).attr("data-validationtarget") );
          }
          else if ($(resItem).attr("type")=="radio"){
              node = $(resItem).parent();
          }
          else
          {

             node = resItem;
          }

         $(node).removeClass("invalidInput"); //reset background color

          if (resItem.validity.valid===false){
            $(node).addClass("invalidInput");  //set background color
            formValidity = false;

          }

    });
    return formValidity;
}
</script>


