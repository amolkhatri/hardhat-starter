const { expect } = require("chai");

describe("HelloWorld", function () {

    it("Should return the right string", async function () {
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const helloWorld = await HelloWorld.deploy("Hello World!");
        await helloWorld.waitForDeployment();

        expect(await helloWorld.message()).to.equal("Hello World!");
    })

});