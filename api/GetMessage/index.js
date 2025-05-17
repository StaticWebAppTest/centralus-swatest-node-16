module.exports = async function (context, req) {
  const date = "2025-05-17T05:12:27.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

