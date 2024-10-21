module.exports = async function (context, req) {
  const date = "2024-10-21T15:12:49.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

