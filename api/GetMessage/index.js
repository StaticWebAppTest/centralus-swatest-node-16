module.exports = async function (context, req) {
  const date = "2025-04-28T15:14:03.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

