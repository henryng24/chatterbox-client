// YOUR CODE HERE:
$(function() {

var server = "https://api.parse.com/1/classes/chatterbox";

var message = {
  'username': 'shawndrost',
  'text': 'trololo',
  'roomname': '4chan'
};

$.ajax({
  // always use this url
  url: 'https://api.parse.com/1/classes/chatterbox',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message');
  }
});

$.ajax({
  // always use this url
  url: 'https://api.parse.com/1/classes/chatterbox',
  type: 'GET',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    for (var i = 0 ; i < data.results.length; i++) {
      displaysMessage(data.results[i]);
    }
  },
  error: function (data) {
    // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message');
  }
});

var displaysMessage = function(message) {
  var time = message.createdAt;
  var id = message.objectId;
  var room = message.roomname;
  var messageShow = message.text;
  var user = message.username;
  var $div = $('<div> </div>');
  $('#main').append($div);
  $div.text(time + " "+ id + " "+ room + " " + messageShow + " " + user);

};

});





