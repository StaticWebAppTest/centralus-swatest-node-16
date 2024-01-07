module.exports = async function (context, req) {
  const date = "2024-01-07T15:08:34.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

