module.exports = async function (context, req) {
  const date = "2025-01-07T17:10:43.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

