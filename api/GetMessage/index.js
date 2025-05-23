module.exports = async function (context, req) {
  const date = "2025-05-23T05:13:36.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

