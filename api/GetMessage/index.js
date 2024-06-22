module.exports = async function (context, req) {
  const date = "2024-06-22T06:13:40.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

