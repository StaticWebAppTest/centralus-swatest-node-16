module.exports = async function (context, req) {
  const date = "2023-09-10T02:16:48.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

