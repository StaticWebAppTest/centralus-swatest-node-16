module.exports = async function (context, req) {
  const date = "2024-02-12T00:41:57.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

