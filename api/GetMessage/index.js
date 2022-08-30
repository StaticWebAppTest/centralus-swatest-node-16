module.exports = async function (context, req) {
  const date = "2022-08-30T20:12:13.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

