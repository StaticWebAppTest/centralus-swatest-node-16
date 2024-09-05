module.exports = async function (context, req) {
  const date = "2024-09-05T20:12:07.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

