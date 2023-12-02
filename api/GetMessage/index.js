module.exports = async function (context, req) {
  const date = "2023-12-02T09:08:14.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

