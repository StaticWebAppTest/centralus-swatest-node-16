module.exports = async function (context, req) {
  const date = "2022-07-09T08:12:57.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

