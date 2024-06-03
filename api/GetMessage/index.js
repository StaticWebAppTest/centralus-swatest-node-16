module.exports = async function (context, req) {
  const date = "2024-06-03T23:11:00.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

