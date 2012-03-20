$(document).ready(function(){

  function evaluate( event ) {
    
    if ( event.which == 13 ) {

      var new_list_item = $( "<li></li>" );
      var latex_span = _.template("<span><%= latex %></span>"); 
      var sheet = $('#sheet');

      sheet.append( new_list_item );

      if ( $(this).hasClass( "mathquill-editable" ) ) {

        var string = $(this).mathquill('latex');
        var result = calculator.parse( string );
        
        $(this).removeClass('mathquill-editable mathquill-textbox');  
        $(this).find("textarea").remove();

        var result_span = $( latex_span( { latex : result } ) );

        result_span.appendTo( new_list_item ).mathquill('editable')
                                             .bind('keydown', evaluate);
    
      }
    }
  }

  $("span").keydown( evaluate );

});
