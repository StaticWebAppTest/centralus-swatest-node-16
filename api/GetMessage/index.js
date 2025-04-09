module.exports = async function (context, req) {
  const date = "2025-04-09T07:13:02.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

