module.exports = async function (context, req) {
  const date = "2025-01-14T17:10:05.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

