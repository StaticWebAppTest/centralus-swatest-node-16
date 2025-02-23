module.exports = async function (context, req) {
  const date = "2025-02-23T03:18:46.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

