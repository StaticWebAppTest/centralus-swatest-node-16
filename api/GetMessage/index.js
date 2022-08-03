module.exports = async function (context, req) {
  const date = "2022-08-03T20:12:13.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

