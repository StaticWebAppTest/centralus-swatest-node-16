module.exports = async function (context, req) {
  const date = "2023-08-18T03:08:56.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

