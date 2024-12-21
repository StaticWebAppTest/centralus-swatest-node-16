module.exports = async function (context, req) {
  const date = "2024-12-21T21:09:43.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

