module.exports = async function (context, req) {
  const date = "2024-08-08T15:11:19.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

