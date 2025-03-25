module.exports = async function (context, req) {
  const date = "2025-03-25T17:11:44.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

