module.exports = async function (context, req) {
  const date = "2025-01-19T04:13:17.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

