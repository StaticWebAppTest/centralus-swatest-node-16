module.exports = async function (context, req) {
  const date = "2022-08-09T20:12:06.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

