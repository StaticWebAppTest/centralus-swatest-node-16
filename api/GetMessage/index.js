module.exports = async function (context, req) {
  const date = "2024-05-26T01:57:20.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

