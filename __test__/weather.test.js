const axios=require("axios")
const getWeatherData=require("../utils/weather")

jest.mock('axios')

describe("getWeatherData function", () => {
    test("should return weather information for a city", async () => {
        const mockData = {
            data: {
                weather: [{ description: "clear" }],
                main: { temp: 25 }
            }
        };
        axios.get.mockResolvedValueOnce(mockData);

        const result = await getWeatherData("london");

        expect(result).toEqual("Temperature: 25°C, Description: clear");
    })
    
    console.error = jest.fn();
    test("should handle errors and throw an exception", async()=>{
        const errorMessage="network error"
        axios.get.mockRejectedValueOnce(new Error(errorMessage))
        await expect(getWeatherData("invalidcity")).rejects.toThrow("Unable to fetch weather information.")
        expect(console.error).toHaveBeenCalledWith(
            'Error fetching weather data:',
            errorMessage
        );
    })


})