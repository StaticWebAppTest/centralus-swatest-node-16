module.exports = async function (context, req) {
  const date = "2026-03-15T13:41:34.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

