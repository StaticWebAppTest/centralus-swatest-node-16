module.exports = async function (context, req) {
  const date = "2022-02-25T20:10:15.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

