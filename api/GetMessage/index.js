module.exports = async function (context, req) {
  const date = "2024-04-26T10:10:39.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

