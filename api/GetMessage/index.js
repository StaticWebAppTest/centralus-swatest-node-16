module.exports = async function (context, req) {
  const date = "2024-04-05T10:10:57.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

