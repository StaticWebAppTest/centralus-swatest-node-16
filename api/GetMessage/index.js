module.exports = async function (context, req) {
  const date = "2022-08-31T16:15:47.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

