module.exports = async function (context, req) {
  const date = "2025-12-07T03:21:37.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

