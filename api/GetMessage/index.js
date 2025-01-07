module.exports = async function (context, req) {
  const date = "2025-01-07T12:23:14.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

