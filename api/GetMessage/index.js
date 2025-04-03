module.exports = async function (context, req) {
  const date = "2025-04-03T14:12:44.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

