module.exports = async function (context, req) {
  const date = "2023-09-20T21:07:31.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

