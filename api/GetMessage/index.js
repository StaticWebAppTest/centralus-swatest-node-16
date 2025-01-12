module.exports = async function (context, req) {
  const date = "2025-01-12T03:22:50.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

