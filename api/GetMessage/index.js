module.exports = async function (context, req) {
  const date = "2025-12-14T08:17:57.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

