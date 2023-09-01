module.exports = async function (context, req) {
  const date = "2023-09-01T06:11:43.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

