module.exports = async function (context, req) {
  const date = "2024-03-03T00:43:24.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

