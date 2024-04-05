module.exports = async function (context, req) {
  const date = "2024-04-05T12:15:48.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

