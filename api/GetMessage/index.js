module.exports = async function (context, req) {
  const date = "2024-01-22T20:09:52.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

