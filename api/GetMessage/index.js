module.exports = async function (context, req) {
  const date = "2023-07-26T20:08:43.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

