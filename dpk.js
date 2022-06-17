const { constants } = require("./config");
const { createHash } = require("./common");


exports.deterministicPartitionKey = (event) => {
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = createHash(data);
    }
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  }  else {
    candidate = constants.TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > constants.MAX_PARTITION_KEY_LENGTH) {
    candidate = createHash(data);
  }
  return candidate;
};

