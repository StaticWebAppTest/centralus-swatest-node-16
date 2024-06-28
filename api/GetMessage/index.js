module.exports = async function (context, req) {
  const date = "2024-06-28T23:10:44.157Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

