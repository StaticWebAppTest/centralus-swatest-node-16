module.exports = async function (context, req) {
  const date = "2025-02-17T14:11:50.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

