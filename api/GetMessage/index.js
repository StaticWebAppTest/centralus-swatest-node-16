module.exports = async function (context, req) {
  const date = "2025-01-23T17:10:44.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

