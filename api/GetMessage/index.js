module.exports = async function (context, req) {
  const date = "2024-09-23T19:09:36.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

