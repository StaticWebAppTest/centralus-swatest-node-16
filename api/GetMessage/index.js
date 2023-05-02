module.exports = async function (context, req) {
  const date = "2023-05-02T23:08:32.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

