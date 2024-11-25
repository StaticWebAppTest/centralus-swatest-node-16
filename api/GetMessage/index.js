module.exports = async function (context, req) {
  const date = "2024-11-25T02:55:23.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

