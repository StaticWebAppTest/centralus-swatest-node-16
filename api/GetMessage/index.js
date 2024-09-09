module.exports = async function (context, req) {
  const date = "2024-09-09T20:12:05.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

