module.exports = async function (context, req) {
  const date = "2022-08-05T06:13:49.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

