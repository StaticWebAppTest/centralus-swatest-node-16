module.exports = async function (context, req) {
  const date = "2025-12-13T14:12:44.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

