module.exports = async function (context, req) {
  const date = "2023-12-26T02:19:04.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

