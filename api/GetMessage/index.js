module.exports = async function (context, req) {
  const date = "2024-04-18T19:07:58.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

