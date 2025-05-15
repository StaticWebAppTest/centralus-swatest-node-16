module.exports = async function (context, req) {
  const date = "2025-05-15T08:18:36.427Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

