module.exports = async function (context, req) {
  const date = "2022-08-19T20:12:37.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

