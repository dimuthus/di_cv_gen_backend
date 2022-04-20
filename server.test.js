
const request = require("supertest");

const baseUrl = 'http://localhost:9999/';

describe('Should get the CV data endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
			.get('api/625840991a9ece30e488335f');
		expect(response.statusCode).toBe(200);
	});

    it('should return a 201 status code', async () => {
		const response = await request(baseUrl)
			.post('api')
            .send({
                userFirstName:"dimuthu",
                userEmail:"dimuthusuranga@gmil.com"
        });
		expect(response.statusCode).toBe(200);
	});
})
