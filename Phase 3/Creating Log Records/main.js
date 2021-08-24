const logger = require('./logss.js')
const reader = require('readline-sync') 

queries = {
    fname:'What is the first name? ',
    lname:'What is the last name? ',
    gender:'What is their gender? ',
    email:'What is their email? '
}

l = new logger.Logger("logs.txt",queries)

iters = parseInt(reader.question("How many records would you like to enter? "))
for(let i = 0; i < iters; i++){
    record = l.promptUser()
    l.log_record_JSON("logrecords.json",record)
}