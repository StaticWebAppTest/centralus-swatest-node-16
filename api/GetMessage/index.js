module.exports = async function (context, req) {
  const date = "2024-06-29T04:13:25.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

