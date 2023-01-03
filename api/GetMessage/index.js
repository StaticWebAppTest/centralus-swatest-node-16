module.exports = async function (context, req) {
  const date = "2023-01-03T22:09:00.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

