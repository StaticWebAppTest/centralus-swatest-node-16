module.exports = async function (context, req) {
  const date = "2022-03-09T06:12:36.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

