module.exports = async function (context, req) {
  const date = "2024-09-06T12:20:29.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

