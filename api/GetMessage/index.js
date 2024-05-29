module.exports = async function (context, req) {
  const date = "2024-05-29T00:50:11.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

