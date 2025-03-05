module.exports = async function (context, req) {
  const date = "2025-03-05T17:11:39.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

