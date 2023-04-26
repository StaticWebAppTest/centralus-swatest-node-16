module.exports = async function (context, req) {
  const date = "2023-04-26T22:07:58.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

