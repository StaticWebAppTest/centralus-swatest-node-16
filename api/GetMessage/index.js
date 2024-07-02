module.exports = async function (context, req) {
  const date = "2024-07-02T04:13:28.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

