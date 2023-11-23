module.exports = async function (context, req) {
  const date = "2023-11-23T12:16:58.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

