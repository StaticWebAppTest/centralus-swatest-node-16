module.exports = async function (context, req) {
  const date = "2023-01-24T20:09:52.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

