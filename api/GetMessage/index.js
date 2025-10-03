module.exports = async function (context, req) {
  const date = "2025-10-03T18:17:59.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

