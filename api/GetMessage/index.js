module.exports = async function (context, req) {
  const date = "2024-09-13T20:12:00.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

