module.exports = async function (context, req) {
  const date = "2024-06-02T20:09:42.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

