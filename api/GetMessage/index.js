module.exports = async function (context, req) {
  const date = "2025-04-25T18:17:59.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

