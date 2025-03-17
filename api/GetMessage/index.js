module.exports = async function (context, req) {
  const date = "2025-03-17T15:13:10.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

