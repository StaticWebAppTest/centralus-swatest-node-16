module.exports = async function (context, req) {
  const date = "2024-02-25T19:08:27.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

