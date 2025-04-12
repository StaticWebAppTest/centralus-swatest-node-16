module.exports = async function (context, req) {
  const date = "2025-04-12T19:10:28.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

