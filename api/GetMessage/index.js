module.exports = async function (context, req) {
  const date = "2025-01-17T09:11:55.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

