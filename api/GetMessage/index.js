module.exports = async function (context, req) {
  const date = "2025-12-25T17:12:44.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

