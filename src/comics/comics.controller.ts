//Listar y crear comics 
import { Controller, Get, Post, Delete } from '@nestjs/common';
// import db from "../commons/database/db"

@Controller('comics')
export class ComicsController {
    @Get()
    findAll(){
        return "Me traigo todos los comics"
    }

    @Post()
    create(){
        return "Agrego comics"
    }
    
    @Delete()
    delete(){
        return "Borro comics"
    }
}
