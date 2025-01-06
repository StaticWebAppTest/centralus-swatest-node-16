module.exports = async function (context, req) {
  const date = "2025-01-06T13:19:32.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

