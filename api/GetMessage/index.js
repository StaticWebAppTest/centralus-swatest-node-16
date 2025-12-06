module.exports = async function (context, req) {
  const date = "2025-12-06T21:11:36.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

