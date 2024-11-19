module.exports = async function (context, req) {
  const date = "2024-11-19T19:09:51.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

