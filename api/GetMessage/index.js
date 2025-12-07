module.exports = async function (context, req) {
  const date = "2025-12-07T12:25:15.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

