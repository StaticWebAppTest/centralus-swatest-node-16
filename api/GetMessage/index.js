module.exports = async function (context, req) {
  const date = "2025-12-20T18:18:26.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

