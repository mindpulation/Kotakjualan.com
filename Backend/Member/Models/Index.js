const Mongo = require('mongodb').MongoClient;

const read = require('./Read');
const Read = new read();

const insert = require('./Insert');
const Insert = new insert();

const update = require('./Update');
const Update = new update();

const drop = require('./Drop');
const Drop = new drop();

const Schema = require('../Schema/Index');
const schema = new Schema();

const cors = require('cors');
app.use(cors());

let publicCount = 0;

class Models{

    constructor(){
        
      this.db;
      this.members;

      this.initDB();

    }

    initDB(){

      Mongo.connect("mongodb://127.0.0.1:27017/KoperasiDB", {useNewUrlParser:true, useUnifiedTopology:true}, (err, con) => {

        if(err){ console.log("[❌] Failed Connect to Database, Messages : ", err) }
        
        if(publicCount === 0){
          schema.createAllCollection(err, con);        
          publicCount++;
        }
            
        this.db = con.db('KoperasiDB');
        this.members = this.db.collection('Members');
        this.logs = this.db.collection('Logs');        
        this.dept = this.db.collection('Dept');
        this.plant = this.db.collection('Plant');
        this.shop = this.db.collection('Shop');


      });

    }

    readAllMemberData(){
        return Read.readAll(this.members);
    }

    readAllDeptData(){
        return Read.readAllDept(this.dept);
    }

    readAllPlantData(){
        return Read.readAllPlant(this.plant);
    }

    readAllShopData(){
        return Read.readAllShop(this.shop);
    }

    readDataPlant(idPlant){
        return Read.readDataPlant(idPlant, this.plant);
    }

    insertDataPlant(plantParam){
        return Insert.insertDataPlant( plantParam, this.plant, this.logs );
    }

    insertDataMember(clientParam){
        return Insert.insertDataMember(clientParam, this.members, this.logs);
    }

    insertDataDept(deptParam){
        return Insert.insertDataDept(deptParam, this.dept, this.logs);
    }

    insertDataShop(shopParam){
        return Insert.insertDataShop(shopParam, this.shop, this.logs);
    }

    insertFindDataDept(deptParam){
        return Read.readDataDept(deptParam, this.dept);
    }

    updateDataMember(clientParam){
        return Update.updateDataMember(clientParam, this.members);
    }

    updateDataDept(deptParam){
        return Update.updateDataDept(deptParam, this.dept);
    }

    updateDataPlant(plantParam){
        return Update.updateDataPlant(plantParam, this.plant)
    }

    updateDataShop(shopParam){
        return Update.updateDataShop(shopParam, this.shop);
    }

    deleteDataDept(deptParam){
        return Drop.dropDataDept(deptParam, this.dept);
    }

    deleteDataMember(id_member){
        return Drop.dropDataMember(id_member, this.members);
    }

    deleteDataPlant(plantParam){
        return Drop.dropDataPlant(plantParam, this.plant);
    }

    deleteDataShop(shopParam){
        return Drop.dropDataShop(shopParam, this.shop);
    }

    readDataMember(searchParam){
        return Read.readDataMember(searchParam, this.members);
    }

    readTotalMember(){
        return Read.readTotalMember(this.members);
    }

    readTotalActiveMember(){
        return Read.readTotalActiveMember(this.members);
    }

    readTotalNonActiveMember(){
        return Read.readTotalNonActiveMember(this.members);
    }

    readLastIDMember(){
        return Read.readLastIDMember(this.logs);
    }

    readLastNoKop(){
        return Read.readLastNoKop(this.logs);
    }

    readDataShop(searchParam){
        return Read.readDataShop(searchParam, this.shop);
    }

}

module.exports = Models;
