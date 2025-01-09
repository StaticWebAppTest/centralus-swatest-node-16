module.exports = async function (context, req) {
  const date = "2025-01-09T12:23:11.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

