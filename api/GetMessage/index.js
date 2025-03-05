module.exports = async function (context, req) {
  const date = "2025-03-05T12:23:48.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

