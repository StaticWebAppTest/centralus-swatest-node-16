module.exports = async function (context, req) {
  const date = "2023-09-01T13:10:47.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

