module.exports = async function (context, req) {
  const date = "2025-05-01T01:10:25.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

