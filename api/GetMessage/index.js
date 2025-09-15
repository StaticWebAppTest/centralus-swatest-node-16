module.exports = async function (context, req) {
  const date = "2025-09-15T14:13:44.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

