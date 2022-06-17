const { deterministicPartitionKey } = require("./dpk");
const { constants } = require("./config");
const { createHash } = require("./common"); 



describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});
 

describe("deterministicPartitionKey", () => {
  it("Returns the partitionKey when given object as input", () => {

    const event = { partitionKey: 123 }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(JSON.stringify(event.partitionKey));
  });
});


describe("deterministicPartitionKey", () => {
  it("Returns the value of TRIVIAL_PARTITION_KEY when given null as input", () => {
    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe(constants.TRIVIAL_PARTITION_KEY);
  });
});


describe("deterministicPartitionKey", () => {
  it("Returns hash when given number as input", () => {
    const val = 12375675675675675675675675675675;
    const trivialKey = deterministicPartitionKey(val);
    console.log(trivialKey)
    expect(trivialKey).toBe(createHash(JSON.stringify(val)));
  });
});


describe("deterministicPartitionKey", () => {
  it("Returns the hash key when given object as input", () => {

    const event = { id: 111, name: "zahoor", address: "Jest", skills: "jack of all" }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(createHash(JSON.stringify(event)));
  });
});