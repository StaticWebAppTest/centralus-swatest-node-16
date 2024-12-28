module.exports = async function (context, req) {
  const date = "2024-12-28T19:08:17.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

