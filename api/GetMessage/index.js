module.exports = async function (context, req) {
  const date = "2025-05-09T15:13:33.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

