module.exports = async function (context, req) {
  const date = "2024-10-10T05:11:44.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

