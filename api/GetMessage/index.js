module.exports = async function (context, req) {
  const date = "2025-02-24T17:11:03.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

