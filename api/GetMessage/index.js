module.exports = async function (context, req) {
  const date = "2023-07-26T22:07:58.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

