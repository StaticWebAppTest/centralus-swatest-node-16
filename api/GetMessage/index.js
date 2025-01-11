module.exports = async function (context, req) {
  const date = "2025-01-11T19:08:16.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

