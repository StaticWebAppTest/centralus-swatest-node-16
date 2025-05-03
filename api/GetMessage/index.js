module.exports = async function (context, req) {
  const date = "2025-05-03T12:22:54.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

