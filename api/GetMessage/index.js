module.exports = async function (context, req) {
  const date = "2025-07-26T09:13:48.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

