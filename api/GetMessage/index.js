module.exports = async function (context, req) {
  const date = "2022-11-09T19:09:15.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

