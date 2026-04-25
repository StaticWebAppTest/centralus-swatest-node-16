module.exports = async function (context, req) {
  const date = "2026-04-25T21:30:07.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

