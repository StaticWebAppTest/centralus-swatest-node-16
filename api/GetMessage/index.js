module.exports = async function (context, req) {
  const date = "2024-01-30T22:08:04.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

