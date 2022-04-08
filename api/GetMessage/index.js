module.exports = async function (context, req) {
  const date = "2022-04-08T20:11:04.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

