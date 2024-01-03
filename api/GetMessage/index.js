module.exports = async function (context, req) {
  const date = "2024-01-03T22:09:00.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

