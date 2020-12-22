const mongoose = require ('mongoose');


const MONGO_URI = 'mongodb+srv://C_J_S:cEXzKdZwci44JkTU@cluster0.xxyaq.mongodb.net/Cluster0?retryWrites=true&w=majority';
mongoose.connect (MONGO_URI , {
useNewUrlParser : true, 
useUnifiedTopology: true, 
dbName: 'HelpDesk'
}).then(response =>{
console.log('Successfully connected to Mongo DB')
}).catch(error => console.log(error));

const Schema = mongoose.Schema;
const date = new Date("2016-05-18T16:00:00Z");

//console.log('hello')
const ticketSchema = new Schema({
  header: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
  student: {
    type: String,
    required: false,
  },
  fellow: {
    type: String,
    required: false,
  },
  expectations: {
    type: String,
    required: true,
  },
  tried: {
    type: String,
    required: true,
  },
  notWorking: {
    type: String,
    required: true,
  },
  zoom: {
    type: String,
    required: true,
  },
  resolvedNotes: {
    type: String,
    required: false,
  },
});
const TicketForm = mongoose.model('ticket',ticketSchema);
module.exports = TicketForm