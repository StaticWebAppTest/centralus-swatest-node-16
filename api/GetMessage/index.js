module.exports = async function (context, req) {
  const date = "2025-05-08T12:26:18.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

