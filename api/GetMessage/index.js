module.exports = async function (context, req) {
  const date = "2022-10-19T12:28:58.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

