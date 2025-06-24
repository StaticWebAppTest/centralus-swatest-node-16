module.exports = async function (context, req) {
  const date = "2025-06-24T10:15:16.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

