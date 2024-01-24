module.exports = async function (context, req) {
  const date = "2024-01-24T22:08:50.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

