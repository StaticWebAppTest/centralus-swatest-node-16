module.exports = async function (context, req) {
  const date = "2024-03-14T03:10:13.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

