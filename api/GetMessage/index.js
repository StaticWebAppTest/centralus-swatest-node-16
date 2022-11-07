module.exports = async function (context, req) {
  const date = "2022-11-07T20:12:38.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

