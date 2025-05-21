module.exports = async function (context, req) {
  const date = "2025-05-21T17:11:44.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

