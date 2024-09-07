module.exports = async function (context, req) {
  const date = "2024-09-07T07:11:33.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

