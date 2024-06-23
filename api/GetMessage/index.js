module.exports = async function (context, req) {
  const date = "2024-06-23T08:11:31.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

