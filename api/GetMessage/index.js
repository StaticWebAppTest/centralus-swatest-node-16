module.exports = async function (context, req) {
  const date = "2022-08-16T21:09:56.884Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

