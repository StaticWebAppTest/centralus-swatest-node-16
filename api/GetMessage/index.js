module.exports = async function (context, req) {
  const date = "2025-03-03T12:23:54.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

