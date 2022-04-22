module.exports = async function (context, req) {
  const date = "2022-04-22T22:10:57.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

