// // Import MySQL connection.
//
// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//   $('.devoured-burger').on('click', function(event) {
//     const id = $(this).data('id');
//     const newBurger = $(this).data('newBurger');
//
//     const newBurgerState = {
//       devoured: newBurger
//     };
//
//     // Send the PUT request.
//     $.ajax('/api/burgers/' + id, {
//       type: 'PUT',
//       data: newBurgerState
//     }).then(
//       function() {
//         console.log('devoured', newBurger);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
//
//   $('#NB').on('click', function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();
//
//     const newBurger = {
//       burger_name: $('#ca').val().trim(),
//       devoured: "true"
//     };
//
//     // Send the POST request.
//     $.ajax('/api/burgers', {
//       type: 'POST',
//       data: newBurger
//     }).then(
//       function() {
//         console.log('created new Burger');
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });
