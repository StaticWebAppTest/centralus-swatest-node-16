module.exports = async function (context, req) {
  const date = "2024-09-08T03:13:16.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

