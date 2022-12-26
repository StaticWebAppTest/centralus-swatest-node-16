module.exports = async function (context, req) {
  const date = "2022-12-26T19:07:07.313Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

