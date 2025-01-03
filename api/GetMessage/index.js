module.exports = async function (context, req) {
  const date = "2025-01-03T00:57:02.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

