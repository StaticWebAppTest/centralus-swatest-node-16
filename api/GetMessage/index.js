module.exports = async function (context, req) {
  const date = "2025-12-12T17:13:42.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

