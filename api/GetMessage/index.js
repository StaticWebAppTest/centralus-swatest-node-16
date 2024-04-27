module.exports = async function (context, req) {
  const date = "2024-04-27T08:11:43.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

