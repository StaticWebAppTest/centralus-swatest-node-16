module.exports = async function (context, req) {
  const date = "2025-02-23T22:10:15.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

