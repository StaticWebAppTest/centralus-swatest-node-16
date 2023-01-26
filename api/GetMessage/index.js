module.exports = async function (context, req) {
  const date = "2023-01-26T15:09:26.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

