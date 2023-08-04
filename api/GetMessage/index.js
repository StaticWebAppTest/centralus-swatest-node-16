module.exports = async function (context, req) {
  const date = "2023-08-04T20:08:51.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

