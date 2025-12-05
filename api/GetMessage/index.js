module.exports = async function (context, req) {
  const date = "2025-12-05T08:19:35.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

