module.exports = async function (context, req) {
  const date = "2024-03-19T20:09:44.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

