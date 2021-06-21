const express=require('express');
const cors=require('cors');
const bodyParser = require('body-parser')
const models=require('./models');
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let user =models.User;
let dados = models.Dados;
let dinheiro = models.dados;


app.get('/read', async (req,res)=>{ //VER TODOS
    let response=await user.findAll({
        raw:true,
    });
    res.send(JSON.stringify(response));
    console.log(response)
});

app.post('/login',async (req,res)=>{ //FAZER LOGIN
    console.log('json')
    let response=await user.findOne({
        where:{name:req.body.name, password: req.body.password}
        
    });
    console.log(response)
    //VOU COLOCAR ELE RECEBENDO OS DADOS AQUI DO USUARIO PQ EU NAO SEI MANDAR RESPONSE2 COM O RESPONSE
    //eu acho que consegui colocando mais uma linha de send
    
    
    
    
    if(response === null){
        res.send(JSON.stringify('error'));
    }
    
    else{
        
        let response2=await dados.findOne({
            where:{userId:response.id}
            
        })
        console.log(response2)
        response2.bonusM=(response2.bonusP/100)*response2.valorInvestido
        response2.save()
        console.log(response2.bonusM)
        fullres = {response,response2}
        res.send(fullres);
    }
});



app.post('/lostacc',async (req,res)=>{ //Recuperar conta 
    console.log(req.body)
    let response=await user.findOne({
        where:{name:req.body.name, cpf: req.body.cpf}
    });
    if(req.body.name === ''){
        res.send(JSON.stringify('Digite o seu nome'))
    }
    else if(response === null){
        res.send(JSON.stringify('Nome ou cpf nao conferem'));
        console.log('era pra ser null')
    }
    
    else{
        console.log('senha alterada')
        response.password=req.body.novaSenha;
        response.save();
        res.send(JSON.stringify('Senha atualizada com sucesso!'));
}
}); 



app.post('/deletacc',async (req,res)=>{ // DELETAR CONTA
    console.log(req.body)
    let response=await user.findOne({
        where:{id:req.body.id,}
    });
    if(req.body.id === null){
        res.send(JSON.stringify('Usuario nao encontrado'))
    }
    else{
        user.destroy({
            where:{
                id:req.body.id
            }
        })
    }
    res.send(JSON.stringify('feito'))

});

app.post('/addind',async (req,res)=>{ // Adicionando Indicacao
    console.log(req.body)
    let response=await dados.findOne({
        where:{userId:req.body.id,}
    });
    if(req.body.id === null){
        res.send(JSON.stringify('Usuario nao encontrado'))
    }
    else{
        console.log(response)
        response.bonusI+=1
        response.save()
    }
    res.send(JSON.stringify('feito'))

});

app.post('/removeind',async (req,res)=>{ // REMOVENDO Indicacao
    console.log(req.body)
    let response=await dados.findOne({
        where:{userId:req.body.id,}
    });
    if(req.body.id === null){
        res.send(JSON.stringify('Usuario nao encontrado'))
    }
    else{
        console.log(response)
        response.bonusI-=1
        response.save()
    }
    res.send(JSON.stringify('feito'))

});

app.post('/verifyPass',async (req,res)=>{ //TROCAR A SENHA 
    console.log(req.body)
    let response=await user.findOne({
        where:{id:req.body.id, password: req.body.senhaAntiga}
    });
    if(req.body.novaSenha === ''){
        res.send(JSON.stringify('Digite algo para a nova senha'))
    }
    else if(response === null){
        res.send(JSON.stringify(null));
        console.log('era pra ser null')
    }
    
    else{
        console.log('nao e null')
        if(req.body. novaSenha === req.body.confNovaSenha){
            response.password=req.body.novaSenha;
            response.save();
            res.send(JSON.stringify('Senha atualizada com sucesso!'));
        }else{
            res.send(JSON.stringify('Nova Senha e Confirmação não conferem!'));
        }
    }
}); 


app.post('/cadastro',async (req,res)=>{ //CADASTRO
    let newId='';
    await user.create({
        name: req.body.nome,
        cpf:req.body.cpf,
        password:req.body.senha
        
    }).then((response)=>{
        userid=response.id;
    });
   await dados.create({
        nome:req.body.nome,
        userId:userid,
        ativo:req.body.ativo,
        valorInvestido: req.body.valorinvestido,
        contrato: req.body.contrato,
        dataInicio:req.body.dataInicio,
        cpf:req.body.cpf,
        dataFim:req.body.dataFim,        
        bonusP:req.body.bonusP,       
        Email:req.body.email,
        bonusI:0,
        num:req.body.numero,
   });
   console.log('numero 2')
   console.log(req.bory.numero)
   res.send(JSON.stringify(req.body.numero));

   

});




let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{

    console.log('servidor rodando');
});