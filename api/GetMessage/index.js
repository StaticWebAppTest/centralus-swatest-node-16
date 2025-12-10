module.exports = async function (context, req) {
  const date = "2025-12-10T13:32:20.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

