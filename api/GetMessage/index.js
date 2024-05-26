module.exports = async function (context, req) {
  const date = "2024-05-26T19:07:46.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

