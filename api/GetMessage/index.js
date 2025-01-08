module.exports = async function (context, req) {
  const date = "2025-01-08T13:19:20.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

