module.exports = async function (context, req) {
  const date = "2025-01-06T06:17:50.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

