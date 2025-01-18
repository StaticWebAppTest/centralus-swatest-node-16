module.exports = async function (context, req) {
  const date = "2025-01-18T06:14:34.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

