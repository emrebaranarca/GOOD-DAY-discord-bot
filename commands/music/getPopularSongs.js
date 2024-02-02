const {SlashCommandBuilder, Integration}=require("discord.js")
const getPopularSongTurkey=require("../../utils/getPopularSongs")

module.exports={
    data: new SlashCommandBuilder()
        .setName("popularsongs")
        .setDescription("Top 10 popular song in Turkey"),
    execute:async(interaction)=>{
        if(!interaction.isCommand()) return;
        let result=[]
        try {
            await getPopularSongTurkey().then(data=>{
                result=data
            }).catch(error=>{
                console.log(error)
            })
            let message="";
            result.map((song,index)=>{
                message+=(index+1)+"."+song+" "
            })         
            await interaction.reply(message)
        }catch(error){
            console.log("e")
            console.log(error.message)
            await interaction.reply('Not Found')
        }
    }
}


