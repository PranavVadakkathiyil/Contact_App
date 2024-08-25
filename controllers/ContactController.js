const asyncHandler = require("express-async-handler");
const Contact = require("../model/contactModel");
//@dec Get all contact
//@route GET /api/contact
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
  console.log(contacts);
});
//@dec  create new contact
//@route POST /api/contact
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  const ContactAvilable = await Contact.findOne({email})

    if(ContactAvilable){
      return res.status(404).json({message:"Contact already avilable"});
    }
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All filed are importend");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.json(contact);
});
//@dec  create new contact
//@route POST /api/contact
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    
    return res.status(404).json({message:"no contact"});
    
  }
  res.json(contact);
  //res.json({message:`get contact of ${req.params.id}`})
});
//@dec  create new contact
//@route POST /api/contact
//@access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updateContact);
});

//@dec  create new contact
//@route POST /api/contact
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  console.log(contact)
  if (!contact) {
    res.status(404);

    throw new Error("contact not found"); 
  }
  await Contact.findByIdAndDelete(req.params.id);
  res.json(contact);
});

module.exports = { 
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
