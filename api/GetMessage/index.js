module.exports = async function (context, req) {
  const date = "2025-01-27T04:14:26.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

