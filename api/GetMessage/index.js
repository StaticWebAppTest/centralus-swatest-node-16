module.exports = async function (context, req) {
  const date = "2024-06-17T08:13:41.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

