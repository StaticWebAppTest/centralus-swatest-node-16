module.exports = async function (context, req) {
  const date = "2025-06-20T18:18:27.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

