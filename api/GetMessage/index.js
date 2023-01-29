module.exports = async function (context, req) {
  const date = "2023-01-29T06:11:22.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

