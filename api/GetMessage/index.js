module.exports = async function (context, req) {
  const date = "2025-04-27T08:15:01.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

