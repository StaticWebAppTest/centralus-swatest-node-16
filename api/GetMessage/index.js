module.exports = async function (context, req) {
  const date = "2022-10-09T20:13:31.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

