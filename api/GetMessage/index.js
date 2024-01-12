module.exports = async function (context, req) {
  const date = "2024-01-12T18:12:00.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

