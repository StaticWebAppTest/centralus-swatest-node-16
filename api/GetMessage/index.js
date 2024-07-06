module.exports = async function (context, req) {
  const date = "2024-07-06T07:08:48.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

