module.exports = async function (context, req) {
  const date = "2025-08-11T10:16:22.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

