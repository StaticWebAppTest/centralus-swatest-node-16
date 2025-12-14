module.exports = async function (context, req) {
  const date = "2025-12-14T17:11:50.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

