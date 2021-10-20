let query = ' '
let req = {}
let netID = 'adg04939'
let pword = '375BIA'
let results = []

customerSelection.onshow = function() {
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&password=" + pword + "&database=" + netID + "&query=" + query)

    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        console.log(`The results are as follows: ${results}`)
    if (results.length == 0) {
        lblMessage.value = "No customers exist in the database."
      } else {
        let message = ""
        for (i = 0; i < results.length; i++)
            message = results[i][1]
            txtCustomerNames.value = message
           }
      } else {
          lblMessage.value = "Error code: " + req.status
      }
}