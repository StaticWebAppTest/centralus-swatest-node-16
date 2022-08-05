module.exports = async function (context, req) {
  const date = "2022-08-05T19:09:04.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

