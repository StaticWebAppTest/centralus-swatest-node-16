module.exports = async function (context, req) {
  const date = "2025-05-20T19:10:22.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

