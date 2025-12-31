module.exports = async function (context, req) {
  const date = "2025-12-31T03:21:42.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

