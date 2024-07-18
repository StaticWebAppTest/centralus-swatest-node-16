module.exports = async function (context, req) {
  const date = "2024-07-18T10:11:12.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

