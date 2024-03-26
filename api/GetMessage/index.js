module.exports = async function (context, req) {
  const date = "2024-03-26T07:08:21.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

