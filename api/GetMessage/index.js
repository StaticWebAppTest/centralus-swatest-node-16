module.exports = async function (context, req) {
  const date = "2025-03-05T08:16:32.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

