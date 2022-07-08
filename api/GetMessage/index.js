module.exports = async function (context, req) {
  const date = "2022-07-08T20:11:22.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

