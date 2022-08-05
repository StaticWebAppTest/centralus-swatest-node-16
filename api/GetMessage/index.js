module.exports = async function (context, req) {
  const date = "2022-08-05T12:21:33.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

