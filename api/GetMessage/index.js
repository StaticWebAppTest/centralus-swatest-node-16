module.exports = async function (context, req) {
  const date = "2023-04-04T12:16:47.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

