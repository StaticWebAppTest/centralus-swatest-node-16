module.exports = async function (context, req) {
  const date = "2025-01-16T11:09:23.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

