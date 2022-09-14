module.exports = async function (context, req) {
  const date = "2022-09-14T06:01:35.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

