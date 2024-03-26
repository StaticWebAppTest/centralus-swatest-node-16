module.exports = async function (context, req) {
  const date = "2024-03-26T23:09:55.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

