module.exports = async function (context, req) {
  const date = "2025-12-25T23:13:41.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

