module.exports = async function (context, req) {
  const date = "2023-12-26T22:08:17.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

