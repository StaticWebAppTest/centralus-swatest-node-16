module.exports = async function (context, req) {
  const date = "2025-05-05T08:19:00.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

