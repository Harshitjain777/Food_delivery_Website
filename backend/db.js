const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://harshitj235:test123@cluster0.w7olgbi.mongodb.net/gofoodmern?retryWrites=true&w=majority";
mongoose.connect(mongoURI);

 const mongoDB = ()=> {

const db = mongoose.connection;

db.once("open", async () => {
  try {
    console.log("Connected to MongoDB");

    // Use the find() method to retrieve all documents and toArray() to convert them into an array
    const dataArray = await mongoose.connection.db.collection("food_items");
    let food_items= await dataArray.find({}).toArray();
    

    global.food_items=food_items;
    const foodCategory= await mongoose.connection.db.collection("foodCategory");
    let food_category=await foodCategory.find({}).toArray();
    
    
    global.foodCategory=food_category;
    
    
  } catch (error) {
    console.error("Error fetching data:", error);
  } 
});

      
};





module.exports = mongoDB;


