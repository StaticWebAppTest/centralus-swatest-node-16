module.exports = async function (context, req) {
  const date = "2022-03-07T06:12:55.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

