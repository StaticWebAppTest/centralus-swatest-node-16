module.exports = async function (context, req) {
  const date = "2026-03-01T18:24:01.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

