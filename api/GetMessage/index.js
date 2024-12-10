module.exports = async function (context, req) {
  const date = "2024-12-10T20:14:00.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

