module.exports = async function (context, req) {
  const date = "2025-01-12T08:13:53.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

