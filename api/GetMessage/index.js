module.exports = async function (context, req) {
  const date = "2025-05-18T08:15:31.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

