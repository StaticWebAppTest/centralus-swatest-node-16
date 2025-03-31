module.exports = async function (context, req) {
  const date = "2025-03-31T13:23:01.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

