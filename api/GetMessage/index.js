module.exports = async function (context, req) {
  const date = "2025-04-05T14:10:19.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

