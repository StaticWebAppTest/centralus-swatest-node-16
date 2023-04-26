module.exports = async function (context, req) {
  const date = "2023-04-26T00:47:20.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

