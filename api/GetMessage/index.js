module.exports = async function (context, req) {
  const date = "2025-03-24T16:16:57.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

