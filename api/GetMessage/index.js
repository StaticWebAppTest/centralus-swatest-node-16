module.exports = async function (context, req) {
  const date = "2025-01-07T00:57:37.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

