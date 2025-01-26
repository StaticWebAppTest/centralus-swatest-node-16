module.exports = async function (context, req) {
  const date = "2025-01-26T06:14:50.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

