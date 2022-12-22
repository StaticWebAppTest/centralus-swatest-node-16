module.exports = async function (context, req) {
  const date = "2022-12-22T08:12:03.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

