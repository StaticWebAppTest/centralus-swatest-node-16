module.exports = async function (context, req) {
  const date = "2024-05-26T22:08:49.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

