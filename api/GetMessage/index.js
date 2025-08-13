module.exports = async function (context, req) {
  const date = "2025-08-13T10:15:43.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

