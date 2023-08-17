module.exports = async function (context, req) {
  const date = "2023-08-17T00:38:14.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

