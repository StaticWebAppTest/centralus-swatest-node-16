module.exports = async function (context, req) {
  const date = "2024-01-11T22:08:47.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

