module.exports = async function (context, req) {
  const date = "2023-07-17T10:11:17.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

