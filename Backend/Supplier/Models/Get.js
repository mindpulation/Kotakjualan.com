class Get{

  constructor(connectionDB){
    this.con = connectionDB;
    this.supp = this.con.collection("Supplier");    
  }

  async getAllSupp(){
    let temp = await this.supp.find().toArray();
    return temp;;
  }

  //param = {Object}
  async getWithParamSupp(param){
    let temp = await this.supp.find(param).toArray();
    return temp;
  }

  //lim = Integer
  async getWithLimitSupp(lim){
    let temp = await this.supp.find().limit(lim).toArray();
    return temp;
  }

  //range = {start, len} => {Mulainya mau darimana, Banyak data yang mau di ambil}
  async getWithRangeSupp(start, len){      
    let temp = await this.supp.find().skip(start).limit(len).toArray();
    return temp;
  }  

  async getLastId(){
    let temp = await this.supp.find().toArray();    
    let len = temp.length;
    let tempLastId =  temp[len-1].id;
    return tempLastId;    
  }

  async getCount() {
    let temp =  await this.supp.countDocuments();    
    return temp;
  }    

}

module.exports = Get;