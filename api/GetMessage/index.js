module.exports = async function (context, req) {
  const date = "2022-08-07T20:11:36.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

