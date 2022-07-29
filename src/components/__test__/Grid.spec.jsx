import { getUserBirthYear } from "../Grid"

const mockedUser = {
    name: "armando",
    surname: "puertas",
    address:
        "some large adress example 1234, Mar del Plata, Partido de General Pueyrcyanon Buenos Aires, Argentina",
    phone: "11256448",
    pet: "cat",
    age: 14
};

describe("get user birth year should", () => {
    beforeAll(() => {
        jest.useFakeTimers('modern');
        jest.setSystemTime(new Date(2020, 3, 1));
    });

    afterAll(() => {
        jest.useRealTimers();
    });
    it("return the year of birth of the user", () => {
        const birthYear = getUserBirthYear(mockedUser);
        expect(birthYear).toStrictEqual(2006);
    })
})

