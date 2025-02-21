module.exports = async function (context, req) {
  const date = "2025-02-21T21:10:19.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

