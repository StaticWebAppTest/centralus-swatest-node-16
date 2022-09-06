module.exports = async function (context, req) {
  const date = "2022-09-06T20:12:05.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

