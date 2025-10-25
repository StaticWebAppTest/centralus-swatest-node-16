module.exports = async function (context, req) {
  const date = "2025-10-25T12:23:29.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

