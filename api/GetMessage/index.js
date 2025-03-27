module.exports = async function (context, req) {
  const date = "2025-03-27T01:00:55.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

