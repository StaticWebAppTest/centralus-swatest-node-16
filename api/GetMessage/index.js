module.exports = async function (context, req) {
  const date = "2024-02-08T20:08:55.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

