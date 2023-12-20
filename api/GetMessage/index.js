module.exports = async function (context, req) {
  const date = "2023-12-20T19:06:21.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

