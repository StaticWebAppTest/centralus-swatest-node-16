module.exports = async function (context, req) {
  const date = "2025-04-27T14:10:42.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

