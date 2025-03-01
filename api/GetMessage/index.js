module.exports = async function (context, req) {
  const date = "2025-03-01T10:11:44.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

