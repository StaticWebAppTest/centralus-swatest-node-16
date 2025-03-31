module.exports = async function (context, req) {
  const date = "2025-03-31T12:25:31.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

