module.exports = async function (context, req) {
  const date = "2025-12-24T05:18:42.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

