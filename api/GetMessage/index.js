module.exports = async function (context, req) {
  const date = "2024-01-20T22:07:52.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

