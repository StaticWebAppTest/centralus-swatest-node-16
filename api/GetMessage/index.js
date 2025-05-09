module.exports = async function (context, req) {
  const date = "2025-05-09T01:05:03.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

