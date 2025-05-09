module.exports = async function (context, req) {
  const date = "2025-05-09T19:10:21.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

