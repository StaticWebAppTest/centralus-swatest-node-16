module.exports = async function (context, req) {
  const date = "2023-12-05T15:10:11.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

