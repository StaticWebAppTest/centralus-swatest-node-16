module.exports = async function (context, req) {
  const date = "2025-05-25T14:11:12.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

