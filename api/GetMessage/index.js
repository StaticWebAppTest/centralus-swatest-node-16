module.exports = async function (context, req) {
  const date = "2025-05-14T12:26:36.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

