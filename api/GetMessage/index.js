module.exports = async function (context, req) {
  const date = "2022-09-20T06:00:29.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

