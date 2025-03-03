module.exports = async function (context, req) {
  const date = "2025-03-03T08:17:23.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

