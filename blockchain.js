class Block{

//Structure of the block what information a block should coantain

          constructor(index,timestamp,data,previousHash=' ')

          this.index=index;;

          this.timestamp=timestamp;

          this.data=data;

          this.previousHash=previousHash;

          this.hash=this.calculate();

         calculateHash(){

                   return SHA256( this.index+this.timestamp+this.previousHash+JSON.stringfy(this.data)).toString();

         }



class Blockchain{

         constructor(){

                this.chain=[this.createGenesisBlock()];

         }

// the first block in block chain is called genesis block

         createGenesisBlock(){

                new Block(0,"16/11/2018","Genesis Block","0");

          }

         getLatestBlock{

                return this.chain[this.chain.lenght-1];

          }

          addBlock{

                     newBlock.previousHash=this.getLatestBlock().hash;

                     newBlock.hash=newBlock.calculateHash();

                     this.chain.push(newBlock);

          }

//Checking if the chain in valid or not (previous hash value in current block ) should be equal to (hash value in previous // //  //  block)  . If not then that block is referring to some other block chain.

          isChainValid(){

                    for(i=1;i<this.chain.length; i++)

                          const currentBlock = this.chain[i];

                          const previousBlock = this.chain[i-1];

                          if(currentBlock.hash != currentBlock.calculatehash()){

                                    return false;

                          }

                         if(currentBlock.previousHash != previousBlock.hash()){

                                    return false;

                          }

                        return true;

}

let coin=new Blockchain();

coin.addBlock(new Block(1, "17/11/2017", {amount:4} ));

coin.addBlock(new Block(1, "18/11/2017", {amount: 5 } ));

coin.addBlock(new Block(1,"17/11/2017",{amount:4}));
console.log(JSON.stringify(coin, null , 4));



Notes:

Run the above script as node chain.js

See, Every block in block chain has a hash function and hash function for the previous block . So a newly created block is attached to the previous block and thus chain keeps on growing.

First Block has no previous block so : That is called genesis block