const getPopularSongsTurkey=require("../utils/getPopularSongs")

const dotnev=require("dotenv")
dotnev.config({path:"../.env"})

const SpotifyWebApi = require('spotify-web-api-node');

jest.mock('spotify-web-api-node')

describe("getPopularSongsTurkey function",()=>{
    test("should return popular 10 songs in Turkey",async()=>{
        SpotifyWebApi.prototype.clientCredentialsGrant.mockResolvedValueOnce({ body: { access_token: 'mocked_access_token' } });
        SpotifyWebApi.prototype.getPlaylistTracks.mockResolvedValueOnce({
            body:{
                items:[
                    {track:{name:"mocked song 1"}},
                    {track:{name:"mocked song 2"}},
                    {track:{name:"mocked song 3"}},
                    {track:{name:"mocked song 4"}},
                    {track:{name:"mocked song 5"}},
                    {track:{name:"mocked song 6"}},
                    {track:{name:"mocked song 7"}},
                    {track:{name:"mocked song 8"}},
                    {track:{name:"mocked song 9"}},
                    {track:{name:"mocked song 10"}}
                ],  
                }
            })

            await getPopularSongsTurkey();

            // Assertions
            expect(SpotifyWebApi.prototype.clientCredentialsGrant).toHaveBeenCalled();
            expect(SpotifyWebApi.prototype.getPlaylistTracks).toHaveBeenCalledWith(process.env.BEST_MUSIC_TURKEY_PLAYLIST_ID, {
              offset: 1,
              limit: 10,
            });
        });
    });

    