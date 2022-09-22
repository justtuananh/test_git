$(document).ready(function() {



    $('#calendar').fullCalendar({

      header: {

        left: 'prev,next today',

        center: 'title',

        right: 'month,agendaWeek,agendaDay'

      },

      defaultDate: '2022-09-12',

      navLinks: true, // can click day/week names to navigate views

      selectable: true,

      selectHelper: true,

      select: function(start, end) {

        var title = prompt('Event Title:');

        var eventData;

        if (title) {

          eventData = {

            title: title,

            start: start,

            end: end

          };

          $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true

        }

        $('#calendar').fullCalendar('unselect');

      },

      editable: true,

      eventLimit: true, // allow "more" link when too many events

      events: [

        {

          title: 'Kế hoạch ngày',

          start: '2022-09-01'

        },

        {

          title: 'Kế hoạch dài hạn',

          start: '2022-09-07',

          end: '2022-09-10'

        },

        {

          id: 999,

          title: 'kế hoạch lặp',

          start: '2022-09-09T16:00:00'

        },

        {

          id: 999,

          title: 'kế hoạch lặp',

          start: '2022-09-16T16:00:00'

        },

        {

          title: 'hội nghị',

          start: '2022-09-11',

          end: '2022-09-13'

        },

        {

          title: 'Cuộc họp',

          start: '2022-09-12T10:30:00',

          end: '2022-09-12T12:30:00'

        },

        {

          title: 'Lunch',

          start: '2022-09-12T12:00:00'

        },

        {

          title: 'Cuộc họp',

          start: '2022-09-12T14:30:00'

        },

        {

          title: 'Giờ vàng',

          start: '2022-09-12T17:30:00'

        },

        {

          title: 'Bữa tối',

          start: '2022-09-12T20:00:00'

        },

        {

          title: 'Tiệc sinh nhật',

          start: '2022-09-13T07:00:00'

        },

        {

          title: 'Click for Google',

          url: 'http://google.com/',

          start: '2022-09-28'

        }

      ]

    });



  });