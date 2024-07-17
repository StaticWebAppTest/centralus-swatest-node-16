module.exports = async function (context, req) {
  const date = "2024-07-17T17:08:55.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

