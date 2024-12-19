module.exports = async function (context, req) {
  const date = "2024-12-19T14:11:36.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

