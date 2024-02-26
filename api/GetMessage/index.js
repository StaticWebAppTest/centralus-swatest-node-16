module.exports = async function (context, req) {
  const date = "2024-02-26T02:18:39.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

