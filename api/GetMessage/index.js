module.exports = async function (context, req) {
  const date = "2023-01-17T08:13:01.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

