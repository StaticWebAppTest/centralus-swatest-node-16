module.exports = async function (context, req) {
  const date = "2023-04-26T09:09:29.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

