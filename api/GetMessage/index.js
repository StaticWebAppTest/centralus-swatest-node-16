module.exports = async function (context, req) {
  const date = "2025-12-15T09:25:08.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

