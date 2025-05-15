module.exports = async function (context, req) {
  const date = "2025-05-15T23:12:48.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

