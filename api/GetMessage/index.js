module.exports = async function (context, req) {
  const date = "2025-12-15T15:18:30.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

