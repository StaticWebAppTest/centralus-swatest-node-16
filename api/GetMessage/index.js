module.exports = async function (context, req) {
  const date = "2022-11-09T20:12:37.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

