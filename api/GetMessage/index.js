module.exports = async function (context, req) {
  const date = "2024-01-05T11:08:08.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

