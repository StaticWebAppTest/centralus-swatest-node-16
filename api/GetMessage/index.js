module.exports = async function (context, req) {
  const date = "2024-07-27T19:08:32.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

