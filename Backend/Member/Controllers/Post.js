const models = require('../Models/Index');
const DB = new models();

class Post{

    postDataMember(clientParam){
        return DB.insertDataMember(clientParam);
    }

    postDataDept(deptParam){
        return DB.insertDataDept(deptParam);
    }

    postFindDataDept(deptParam){
        return DB.insertFindDataDept(deptParam);
    }

    postDataPlant(plantParam){
        return DB.insertDataPlant(plantParam);
    }

    updateDataMember(clientParam){
        return DB.updateDataMember(clientParam);
    }

    deleteDataMember(id_param){
        return DB.deleteDataMember(id_param);
    }

    updateDataDept(clientParam){
        return DB.updateDataDept(clientParam);
    }

    updateDataPlant(plantParam){
        return DB.updateDataPlant(plantParam);
    }

    deleteDataDept(id_param){
        return DB.deleteDataDept(id_param);
    }

    deleteDataPlant(plantParam){
        return DB.deleteDataPlant(plantParam);
    }

    searchDataMember(id_param){
        return DB.readDataMember(id_param);
    }

    searchDataPlant(idPlant){
        return DB.readDataPlant(idPlant);
    }

}
module.exports = Post;