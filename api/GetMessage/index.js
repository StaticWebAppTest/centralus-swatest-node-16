module.exports = async function (context, req) {
  const date = "2022-08-18T12:23:51.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

