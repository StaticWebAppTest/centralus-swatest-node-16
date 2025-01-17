module.exports = async function (context, req) {
  const date = "2025-01-17T14:10:26.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

