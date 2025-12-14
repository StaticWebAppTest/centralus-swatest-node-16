module.exports = async function (context, req) {
  const date = "2025-12-14T11:11:51.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

