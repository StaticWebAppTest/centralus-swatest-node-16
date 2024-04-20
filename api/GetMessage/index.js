module.exports = async function (context, req) {
  const date = "2024-04-20T12:15:54.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

