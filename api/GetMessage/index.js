module.exports = async function (context, req) {
  const date = "2025-04-09T19:10:40.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

