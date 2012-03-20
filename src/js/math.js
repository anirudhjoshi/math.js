$(document).ready(function(){

  function evaluate( event ) {
    
    if ( event.which == 13 ) {

      var new_list_item = $( "<li></li>" );
      var latex_span = _.template("<span><%= latex %></span>"); 
      var sheet = $('#sheet');

      if ( $(this).hasClass( "mathquill-editable" ) ) {

        var string = $(this).mathquill('latex');
        var result = calculator.parse( string );
        
        $(this).removeClass('mathquill-editable mathquill-textbox');  
        $(this).find("textarea").remove();

        var result_span = $( latex_span( { latex : result } ) );
        console.log( result_span );

        result_span.appendTo( new_list_item ).appendTo( sheet ).mathquill('editable').bind('keydown', evaluate);
    
      }
    }
  }

  $("span").keydown( evaluate );

});
