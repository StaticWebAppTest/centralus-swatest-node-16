module.exports = async function (context, req) {
  const date = "2023-02-22T13:19:48.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

