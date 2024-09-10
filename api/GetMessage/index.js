module.exports = async function (context, req) {
  const date = "2024-09-10T05:11:34.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

