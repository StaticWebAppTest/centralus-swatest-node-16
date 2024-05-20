module.exports = async function (context, req) {
  const date = "2024-05-20T20:09:55.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

