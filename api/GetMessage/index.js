module.exports = async function (context, req) {
  const date = "2024-01-03T12:16:35.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

