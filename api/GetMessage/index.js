module.exports = async function (context, req) {
  const date = "2023-01-24T21:08:27.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

