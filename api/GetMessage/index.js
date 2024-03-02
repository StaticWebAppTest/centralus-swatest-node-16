module.exports = async function (context, req) {
  const date = "2024-03-02T02:13:01.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

