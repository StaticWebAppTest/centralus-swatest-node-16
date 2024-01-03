module.exports = async function (context, req) {
  const date = "2024-01-03T20:10:08.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

