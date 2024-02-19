import { expect, test } from '@playwright/test';

test.describe('api testing', () => {

    test("get status code", async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users/2')
        expect(response.status()).toBe(200);
        const text = await response.text();
        expect(text).toContain('Janet');
        console.log(await response.json());
    });

    test("Demo API POST request", async ({ request }) => {
        const response = await request.post("https://reqres.in/api/users", {
            data: {
                "name": "Raghav",
                "job": "teacher"
            }
        })
        //sucess and noreturn data
        expect(response.status()).toBe(201);
        const text = await response.text();
        expect(text).toContain("Raghav");
        console.log(await response.json());
    });


    test('Demo API PUT Request', async ({ request }) => {

        const response = await request.put("https://reqres.in/api/users/2", {
            data: {
                "name": "Raghav",
                "job": "student"
            }
        })

        expect(response.status()).toBe(200);
        const text = await response.text();
        expect(text).toContain('Raghav');
        console.log(await response.json());
    })

    test('Demo API DELETE Request', async ({ request }) => {

        const response = await request.delete("https://reqres.in/api/users/2")
        expect(response.status()).toBe(204);
    });

});