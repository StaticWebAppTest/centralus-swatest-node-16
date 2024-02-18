module.exports = async function (context, req) {
  const date = "2024-02-18T00:43:55.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

