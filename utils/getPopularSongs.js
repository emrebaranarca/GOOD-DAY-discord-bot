const SpotifyWebApi = require('spotify-web-api-node');
const dotnev=require("dotenv")
dotnev.config({path:"../.env"})
// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID_SPOTIFY,
  clientSecret: process.env.SECRET_ID_SPOTIFY,
  redirectUri: 'http://localhost:3000/'
});



async function getPopularSongsTurkey(){
    var data=await spotifyApi.clientCredentialsGrant()
    spotifyApi.setAccessToken( data.body.access_token)

    try {
        const playlistaTrack=await spotifyApi.getPlaylistTracks(process.env.BEST_MUSIC_TURKEY_PLAYLIST_ID,{
            offset:1,
            limit:10
        })

        const songs=playlistaTrack.body.items.map(song=>song.track.name)
        return songs

    } catch (error) {

        console.error(error)
        return []
        
    }
}


// getPopularSongsTurkey().then(data=>{
//     console.log(data);
// }).catch(error=>{
//     console.log(error)
// })






























// module.exports={
//     spotifyApi.clientCredentialsGrant().then(data=>{
//         spotifyApi.setAccessToken(data.body.access_token);

//         return spotifyApi.getPlaylistTracks(process.env.BEST_MUSIC_TURKEY_PLAYLIST_ID,{
//             offset: 1,
//             limit: 10
//         });
//     }).then(data=>{
//     songs=[]
//     const popularSongs=data.body.items
//     popularSongs.forEach(song => {
//         songs.push(song.track.name)
//         console.log(song.track.name);

//     });
// }).catch(error=>{
//     console.log(error);
// })

    
// }

module.exports=getPopularSongsTurkey




